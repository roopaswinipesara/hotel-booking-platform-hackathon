const features = [
  { icon: '⌕', title: 'Easy Search', description: 'Search by destination, dates and number of guests.' },
  { icon: '◈', title: 'Smart Filters', description: 'Filter hotels by price, ratings and amenities.' },
  { icon: '▣', title: 'Simple Booking', description: 'Select a room, enter guest details and confirm your stay.' },
  { icon: '✓', title: 'Booking Confirmation', description: 'Receive an instant booking ID after confirmation.' },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="section-heading centered">
        <p className="eyebrow">WHY STAYEASE</p>
        <h2>Everything you need to book</h2>
      </div>
      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
