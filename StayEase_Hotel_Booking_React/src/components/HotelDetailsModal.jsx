export default function HotelDetailsModal({ hotel, onClose, onBook }) {
  if (!hotel) return null;

  return (
    <div className="modal active" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal-card hotel-details-modal" role="dialog" aria-modal="true" aria-labelledby="hotelDetailsTitle">
        <button className="close" type="button" onClick={onClose} aria-label="Close">×</button>
        <p className="eyebrow">HOTEL INFORMATION</p>
        <h2 id="hotelDetailsTitle">{hotel.name}</h2>
        <p className="muted">📍 {hotel.location} · {hotel.region} &nbsp; ★ {hotel.rating.toFixed(1)}</p>
        <p className="details-description">{hotel.description}</p>

        <div className="details-heading-row">
          <h3>Available Room Types</h3>
          <span>{hotel.rooms} rooms listed</span>
        </div>
        <div className="room-type-list">
          {hotel.roomTypes.map((room) => (
            <article className="room-type-card" key={room.id}>
              <div>
                <h4>{room.name}</h4>
                <p>{room.description}</p>
                <small>Up to {room.maxGuests} guests</small>
              </div>
              <div className="room-type-action">
                <strong>₹{room.price.toLocaleString('en-IN')}</strong>
                <small>per night</small>
                <button type="button" className="book-btn" onClick={() => onBook(hotel, room)}>Book this room</button>
              </div>
            </article>
          ))}
        </div>

        <h3 className="amenities-heading">Hotel Amenities</h3>
        <div className="amenities details-amenities">
          {hotel.amenities.map((amenity) => <span className="amenity" key={amenity}>{amenity}</span>)}
        </div>
        <p className="data-note">Room rates and facilities are sample information for this frontend demonstration.</p>
      </div>
    </div>
  );
}
