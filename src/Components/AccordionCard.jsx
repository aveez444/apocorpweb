function AccordionCard({ data, idx, isExpanded, isMobileActive, onClick }) {
  return (
    <div
      // className={`accordion-card ${isExpanded ? "expanded" : ""}`}
      className={`accordion-card ${isExpanded ? "expanded" : ""} ${isMobileActive ? "mobile-active" : ""}`}
      data-index={idx}
      onClick={onClick}
    >
      <div className="stripe-overlay"></div>
      <img alt={data.title} src={data.img} />
      <div className="industrial-card-gradient"></div>
      <div className="card-content">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default AccordionCard;