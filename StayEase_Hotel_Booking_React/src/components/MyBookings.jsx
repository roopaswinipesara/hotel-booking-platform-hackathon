export default function MyBookings({ user, bookings, onLogin, onCancel }) {
  return (
    <section id="my-bookings" className="my-bookings-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR STAYS</p>
          <h2>My Bookings</h2>
          <p className="data-note">Your booking details are saved in this browser for the demo.</p>
        </div>
        {user && <span className="result-count">{bookings.length} booking{bookings.length === 1 ? '' : 's'}</span>}
      </div>

      {!user ? (
        <div className="my-bookings-empty">
          <h3>Login to view your bookings</h3>
          <p>Your confirmed hotel reservations will appear here.</p>
          <button className="primary-btn" type="button" onClick={() => onLogin('login')}>Login</button>
        </div>
      ) : bookings.length === 0 ? (
        <div className="my-bookings-empty">
          <h3>You haven't booked a stay yet</h3>
          <p>Explore hotels and your confirmed reservations will appear here.</p>
          <a className="book-btn bookings-browse-link" href="#hotels">Explore Hotels</a>
        </div>
      ) : (
        <div className="my-bookings-list">
          {bookings.map((booking) => (
            <article className="my-booking-card" key={booking.id}>
              <div className="my-booking-main">
                <div>
                  <p className="booking-reference">BOOKING #{booking.id}</p>
                  <h3>{booking.hotel}</h3>
                  <p className="location">{booking.location} · {booking.room}</p>
                </div>
                <span className={`status ${(booking.status || 'Confirmed').toLowerCase()}`}>{booking.status || 'Confirmed'}</span>
              </div>
              <div className="my-booking-meta">
                <span><b>Check-in</b>{booking.checkIn}</span>
                <span><b>Check-out</b>{booking.checkOut}</span>
                <span><b>Guests</b>{booking.guests || 1}</span>
                <span><b>Total amount</b>₹{Number(booking.totalAmount || 0).toLocaleString('en-IN')}</span>
              </div>
              {booking.status === 'Cancelled' ? (
                <div className="booking-cancelled-note">
                  Cancelled{booking.cancelledAt ? ` on ${new Date(booking.cancelledAt).toLocaleString('en-IN')}` : ''}
                </div>
              ) : booking.status === 'Confirmed' ? (
                <div className="my-booking-actions">
                  <button className="cancel-booking-btn" type="button" onClick={() => onCancel(booking)}>
                    Cancel booking
                  </button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
