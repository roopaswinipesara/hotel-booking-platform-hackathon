export default function BookingModal({ hotel, dates, user, onClose, onConfirm }) {
  if (!hotel) return null;
  const room = hotel.selectedRoom || hotel.roomTypes?.[0] || { name: hotel.room || 'Standard Room', price: hotel.price };

  return (
    <div className="modal active" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="bookingTitle">
        <button className="close" type="button" onClick={onClose} aria-label="Close">×</button>
        <p className="eyebrow">RESERVE YOUR ROOM</p>
        <h2 id="bookingTitle">{hotel.name}</h2>
        <p className="muted">{room.name} • ₹{room.price.toLocaleString('en-IN')} / night</p>

        <form onSubmit={(event) => { event.preventDefault(); onConfirm(event.currentTarget); }}>
          <div className="two-col">
            <div><label htmlFor="guestName">Full Name</label><input id="guestName" name="guestName" required defaultValue={user?.name || ''} placeholder="Enter your name" /></div>
            <div><label htmlFor="guestEmail">Email</label><input id="guestEmail" name="guestEmail" type="email" required defaultValue={user?.email || ''} placeholder="you@example.com" /></div>
          </div>
          <div className="two-col">
            <div><label htmlFor="modalCheckIn">Check-in</label><input id="modalCheckIn" name="checkIn" type="date" required defaultValue={dates.checkIn} /></div>
            <div><label htmlFor="modalCheckOut">Check-out</label><input id="modalCheckOut" name="checkOut" type="date" required defaultValue={dates.checkOut} /></div>
          </div>
          <label htmlFor="bookingGuests">Number of Guests</label>
          <input id="bookingGuests" name="guests" type="number" min="1" max={room.maxGuests || 8} defaultValue={dates.guests || 2} required />
          <label htmlFor="paymentMethod">Payment Method</label>
          <select id="paymentMethod" name="paymentMethod">
            <option>Credit / Debit Card</option><option>UPI</option><option>Net Banking</option>
          </select>
          <div className="payment-note">Demo only: no real payment is processed. The total is calculated from the room's sample nightly price.</div>
          <button className="primary-btn" type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
