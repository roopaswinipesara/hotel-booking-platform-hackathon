import { amenityOptions } from '../data/hotels.js';

function HotelCard({ hotel, onBook, onViewDetails }) {
  return (
    <article className="hotel-card">
      <div className={`hotel-image ${hotel.image}`}>
        <span className="tag">{hotel.rooms} rooms listed</span>
      </div>
      <div className="hotel-body">
        <div className="hotel-top">
          <div>
            <h3>{hotel.name}</h3>
            <p className="location">📍 {hotel.location} · {hotel.region}</p>
          </div>
          <span className="rating">★ {hotel.rating.toFixed(1)}</span>
        </div>
        <p className="location">{hotel.description}</p>
        <div className="amenities">
          {hotel.amenities.slice(0, 4).map((amenity) => (
            <span className="amenity" key={amenity}>{amenity}</span>
          ))}
          {hotel.amenities.length > 4 && <span className="amenity">+{hotel.amenities.length - 4} more</span>}
        </div>
        <div className="card-bottom">
          <div className="price">
            <strong>₹{hotel.price.toLocaleString('en-IN')}</strong>
            <small>/ night onwards</small>
          </div>
          <button className="book-btn" onClick={() => onBook(hotel, hotel.roomTypes[0])}>Book Now</button>
        </div>
        <button className="details-btn" type="button" onClick={() => onViewDetails(hotel)}>
          View Rooms &amp; Amenities
        </button>
      </div>
    </article>
  );
}

export default function HotelSection({ hotels, locations, filters, setFilters, onBook, onViewDetails, onClear }) {
  return (
    <section id="hotels" className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">DISCOVER YOUR STAY</p>
          <h2>Available Hotels</h2>
          <p className="data-note">Sample listings for project demonstration. Prices and availability are illustrative.</p>
        </div>
        <span className="result-count">{hotels.length} hotel{hotels.length === 1 ? '' : 's'}</span>
      </div>

      <div className="booking-layout">
        <aside className="filters">
          <h3>Filter Results</h3>
          <label htmlFor="locationFilter">Location</label>
          <select id="locationFilter" value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
            <option value="all">All locations</option>
            {locations.map((location) => <option key={location} value={location}>{location}</option>)}
          </select>

          <label htmlFor="priceFilter">Maximum price: <b>₹{filters.maxPrice.toLocaleString('en-IN')}</b></label>
          <input id="priceFilter" type="range" min="1000" max="15000" step="500" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })} />

          <label htmlFor="ratingFilter">Minimum rating</label>
          <select id="ratingFilter" value={filters.minRating} onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}>
            <option value="0">Any rating</option>
            <option value="4">4.0+</option>
            <option value="4.5">4.5+</option>
          </select>

          <p className="filter-title">Amenities</p>
          {amenityOptions.map((amenity) => (
            <label className="check" key={amenity}>
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={(e) => {
                  const next = e.target.checked
                    ? [...filters.amenities, amenity]
                    : filters.amenities.filter((item) => item !== amenity);
                  setFilters({ ...filters, amenities: next });
                }}
              /> {amenity}
            </label>
          ))}
          <button className="clear-btn" onClick={onClear}>Clear Filters</button>
        </aside>

        <div className="hotel-grid">
          {hotels.length ? hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onBook={onBook} onViewDetails={onViewDetails} />
          )) : (
            <div className="empty">
              <h3>No hotels match your search</h3>
              <p>Try changing your destination or clearing some filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
