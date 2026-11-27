import { useEffect, useMemo, useState } from 'react';
import hotels, { hotelLocations } from './data/hotels.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HotelSection from './components/HotelSection.jsx';
import Features from './components/Features.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import BookingModal from './components/BookingModal.jsx';
import HotelDetailsModal from './components/HotelDetailsModal.jsx';
import LoginModal from './components/LoginModal.jsx';
import MyBookings from './components/MyBookings.jsx';
import Footer from './components/Footer.jsx';
import { hashDemoPassword, readFromStorage, removeFromStorage, STORAGE_KEYS, writeToStorage } from './utils/storage.js';

const initialAdminBookings = [
  { id: 'SE1028', customer: 'Rahul Kumar', hotel: 'Skyline Grand', room: 'Deluxe', status: 'Confirmed' },
  { id: 'SE1027', customer: 'Ananya Rao', hotel: 'Ocean Pearl', room: 'Suite', status: 'Confirmed' },
  { id: 'SE1026', customer: 'Arjun Singh', hotel: 'Royal Orchid', room: 'Premium', status: 'Pending' },
];

const initialFilters = { location: 'all', maxPrice: 10000, minRating: 0, amenities: [] };

function makeId() {
  if (window.crypto?.randomUUID) return `SE${window.crypto.randomUUID().replaceAll('-', '').slice(0, 10).toUpperCase()}`;
  return `SE${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 90 + 10)}`;
}

export default function App() {
  const [filters, setFilters] = useState(initialFilters);
  const [destinationQuery, setDestinationQuery] = useState('');
  const [searchValues, setSearchValues] = useState({ destination: '', checkIn: '', checkOut: '', guests: '2' });
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [pendingBooking, setPendingBooking] = useState(null);
  const [detailsHotel, setDetailsHotel] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(() => readFromStorage(STORAGE_KEYS.session, null));
  const [bookings, setBookings] = useState(() => readFromStorage(STORAGE_KEYS.bookings, []));
  const [toast, setToast] = useState('');

  const visibleHotels = useMemo(() => hotels.filter((hotel) => {
    const locationMatch = filters.location === 'all' || hotel.location === filters.location;
    const priceMatch = hotel.price <= filters.maxPrice;
    const ratingMatch = hotel.rating >= filters.minRating;
    const amenitiesMatch = filters.amenities.every((amenity) => hotel.amenities.includes(amenity));
    const query = destinationQuery.toLowerCase();
    const destinationMatch = !query || hotel.location.toLowerCase().includes(query) || hotel.name.toLowerCase().includes(query);
    return locationMatch && priceMatch && ratingMatch && amenitiesMatch && destinationMatch;
  }), [filters, destinationQuery]);

  const myBookings = useMemo(() => {
    if (!user) return [];
    return bookings.filter((booking) => booking.userId === user.id || booking.userEmail === user.email);
  }, [bookings, user]);

  const adminBookings = useMemo(() => [...bookings, ...initialAdminBookings], [bookings]);

  useEffect(() => {
    if (user) writeToStorage(STORAGE_KEYS.session, user);
    else removeFromStorage(STORAGE_KEYS.session);
  }, [user]);

  useEffect(() => {
    writeToStorage(STORAGE_KEYS.bookings, bookings);
  }, [bookings]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 3500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function openLogin(mode = 'login') {
    setAuthMode(mode);
    setLoginOpen(true);
  }

  function handleSearch(event) {
    event.preventDefault();
    setDestinationQuery(searchValues.destination.trim());
    document.getElementById('hotels')?.scrollIntoView({ behavior: 'smooth' });
  }

  function clearFilters() {
    setFilters(initialFilters);
    setDestinationQuery('');
    setSearchValues((current) => ({ ...current, destination: '' }));
  }

  function requestBooking(hotel, room) {
    const requestedStay = { ...hotel, selectedRoom: room };
    if (!user) {
      setPendingBooking(requestedStay);
      openLogin('login');
      setToast('Please log in or sign up before booking a room.');
      return;
    }
    setSelectedHotel(requestedStay);
  }

  async function handleAuthenticate({ mode, name, email, password }) {
    const normalizedEmail = email.toLowerCase();

    try {
      const accounts = readFromStorage(STORAGE_KEYS.accounts, []);
      let account;

      if (mode === 'register') {
        if (!name) return { success: false, error: 'Please enter your name.' };
        if (password.length < 6) return { success: false, error: 'Password must contain at least 6 characters.' };
        if (accounts.some((savedAccount) => savedAccount.email === normalizedEmail)) {
          return { success: false, error: 'An account with this email already exists. Please log in.' };
        }

        const passwordHash = await hashDemoPassword(password);
        account = {
          id: window.crypto?.randomUUID ? window.crypto.randomUUID() : `user-${Date.now()}`,
          name,
          email: normalizedEmail,
          passwordHash,
        };
        if (!writeToStorage(STORAGE_KEYS.accounts, [...accounts, account])) {
          return { success: false, error: 'Could not save your account in this browser.' };
        }
      } else {
        account = accounts.find((savedAccount) => savedAccount.email === normalizedEmail);
        if (!account) return { success: false, error: 'No account found with this email. Please sign up first.' };
        const passwordHash = await hashDemoPassword(password);
        if (account.passwordHash !== passwordHash) {
          return { success: false, error: 'Incorrect password. Please try again.' };
        }
      }

      const sessionUser = { id: account.id, name: account.name, email: account.email };
      setUser(sessionUser);
      setLoginOpen(false);
      setToast(mode === 'register' ? `Welcome to StayEase, ${account.name}!` : `Welcome back, ${account.name}!`);

      if (pendingBooking) {
        setSelectedHotel(pendingBooking);
        setPendingBooking(null);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Something went wrong. Please try again.' };
    }
  }

  function handleLogout() {
    setUser(null);
    setSelectedHotel(null);
    setPendingBooking(null);
    setToast('You have been logged out. Your saved bookings are still available when you log back in.');
  }

  function cancelBooking(booking) {
    if (!booking || booking.status !== 'Confirmed') return;

    const confirmed = window.confirm(
      `Are you sure you want to cancel booking #${booking.id} at ${booking.hotel}?`
    );
    if (!confirmed) return;

    const cancelledAt = new Date().toISOString();
    setBookings((currentBookings) => {
      const updatedBookings = currentBookings.map((savedBooking) =>
        savedBooking.id === booking.id && savedBooking.status === 'Confirmed'
          ? { ...savedBooking, status: 'Cancelled', cancelledAt }
          : savedBooking
      );
      writeToStorage(STORAGE_KEYS.bookings, updatedBookings);
      return updatedBookings;
    });
    setToast(`Booking #${booking.id} has been cancelled.`);
  }

  function confirmBooking(form) {
    if (!user || !selectedHotel) return;

    const formData = new FormData(form);
    const checkIn = String(formData.get('checkIn') || '');
    const checkOut = String(formData.get('checkOut') || '');
    const startDate = new Date(`${checkIn}T00:00:00`);
    const endDate = new Date(`${checkOut}T00:00:00`);
    const nights = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

    if (!checkIn || !checkOut || !Number.isFinite(nights) || nights <= 0) {
      setToast('Please select a valid check-in and check-out date. Check-out must be after check-in.');
      return;
    }

    const room = selectedHotel.selectedRoom || selectedHotel.roomTypes?.[0] || { name: 'Standard Room', price: selectedHotel.price };
    const pricePerNight = Number(room.price || selectedHotel.price || 0);
    const newBooking = {
      id: makeId(),
      userId: user.id,
      userEmail: user.email,
      customer: String(formData.get('guestName') || user.name),
      guestEmail: String(formData.get('guestEmail') || user.email),
      hotel: selectedHotel.name,
      location: selectedHotel.location,
      room: room.name,
      checkIn,
      checkOut,
      nights,
      guests: Number(formData.get('guests') || 1),
      pricePerNight,
      totalAmount: pricePerNight * nights,
      paymentMethod: String(formData.get('paymentMethod') || 'Not specified'),
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    writeToStorage(STORAGE_KEYS.bookings, updatedBookings);
    setSelectedHotel(null);
    setToast(`Booking confirmed! Your booking ID is #${newBooking.id}. Total: ₹${newBooking.totalAmount.toLocaleString('en-IN')}`);
    form.reset();
    window.setTimeout(() => document.getElementById('my-bookings')?.scrollIntoView({ behavior: 'smooth' }), 250);
  }

  return (
    <>
      <Navbar user={user} onLogin={openLogin} onLogout={handleLogout} />
      <main>
        <Hero search={handleSearch} searchValues={searchValues} setSearchValues={setSearchValues} />
        <HotelSection
          hotels={visibleHotels}
          locations={hotelLocations}
          filters={filters}
          setFilters={setFilters}
          onBook={requestBooking}
          onViewDetails={(hotel) => setDetailsHotel(hotel)}
          onClear={clearFilters}
        />
        <Features />
        <MyBookings user={user} bookings={myBookings} onLogin={openLogin} onCancel={cancelBooking} />
        <AdminDashboard bookingCount={128 + bookings.length} bookings={adminBookings} hotelCount={hotels.length} cityCount={hotelLocations.length} roomCount={hotels.reduce((total, hotel) => total + hotel.rooms, 0)} />
      </main>
      <HotelDetailsModal
        hotel={detailsHotel}
        onClose={() => setDetailsHotel(null)}
        onBook={(hotel, room) => { setDetailsHotel(null); requestBooking(hotel, room); }}
      />
      <BookingModal
        hotel={selectedHotel}
        dates={searchValues}
        user={user}
        onClose={() => setSelectedHotel(null)}
        onConfirm={confirmBooking}
      />
      <LoginModal open={loginOpen} initialMode={authMode} onClose={() => { setLoginOpen(false); setPendingBooking(null); }} onAuthenticate={handleAuthenticate} />
      {toast && <div className="toast show" role="status">{toast}</div>}
      <Footer />
    </>
  );
}
