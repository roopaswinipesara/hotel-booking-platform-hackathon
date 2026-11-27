export default function Hero({ search, searchValues, setSearchValues }) {
  const update = (event) => {
    setSearchValues({ ...searchValues, [event.target.name]: event.target.value });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <p className="eyebrow">TRAVEL • RELAX • REPEAT</p>
        <h1>Find a place you'll<br /><span>love to stay.</span></h1>
        <p className="hero-text">
          Search, compare and book comfortable hotels with simple filters
          and a smooth booking experience.
        </p>

        <form className="search-box" onSubmit={search}>
          <div className="field">
            <label htmlFor="destination">Destination</label>
            <input id="destination" name="destination" value={searchValues.destination} onChange={update} placeholder="e.g. Hyderabad" />
          </div>
          <div className="field">
            <label htmlFor="checkIn">Check-in</label>
            <input id="checkIn" name="checkIn" type="date" value={searchValues.checkIn} onChange={update} />
          </div>
          <div className="field">
            <label htmlFor="checkOut">Check-out</label>
            <input id="checkOut" name="checkOut" type="date" value={searchValues.checkOut} onChange={update} />
          </div>
          <div className="field">
            <label htmlFor="guests">Guests</label>
            <select id="guests" name="guests" value={searchValues.guests} onChange={update}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
          <button className="search-btn" type="submit">Search Hotels</button>
        </form>
      </div>
    </section>
  );
}
