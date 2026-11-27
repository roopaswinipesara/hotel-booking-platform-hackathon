export default function AdminDashboard({ bookingCount, bookings, hotelCount, cityCount, roomCount }) {
  return (
    <section id="admin" className="admin-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">HOTEL MANAGEMENT</p>
          <h2>Admin Dashboard</h2>
        </div>
        <span className="admin-badge">FRONTEND DEMO</span>
      </div>

      <div className="admin-grid">
        <div className="stat-card"><span>Total Bookings</span><strong>{bookingCount}</strong><small>+12 this week</small></div>
        <div className="stat-card"><span>Listed Rooms</span><strong>{roomCount}</strong><small>Across {hotelCount} sample hotels</small></div>
        <div className="stat-card"><span>Cities Covered</span><strong>{cityCount}</strong><small>Across India</small></div>
      </div>

      <div className="admin-table-wrap">
        <h3>Recent Bookings</h3>
        <table>
          <thead>
            <tr><th>Booking ID</th><th>Customer</th><th>Hotel</th><th>Room</th><th>Status</th></tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>#{booking.id}</td><td>{booking.customer}</td><td>{booking.hotel}</td><td>{booking.room}</td>
                <td><span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
