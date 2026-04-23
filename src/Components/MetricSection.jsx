import React from "react";
import "../Styles/MetricSection.css";

const stats = [
  { label: "Daily Transaction Handling", value: "50,000+" },
  { label: "Efficiency Increased By", value: "70%" },
  { label: "Annual Operation Savings", value: "$60,000" },
];

const MetricSection = () => {
  return (
    <section className="impact-section">
      {/* Decorative wave lines */}
      <div className="wave-left">
        <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <ellipse
              key={i}
              cx="300"
              cy="200"
              rx={80 + i * 28}
              ry={120 + i * 22}
              fill="none"
              stroke="rgba(99,179,237,0.18)"
              strokeWidth="1.2"
            />
          ))}
        </svg>
      </div>
      <div className="wave-right">
        <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <ellipse
              key={i}
              cx="300"
              cy="200"
              rx={80 + i * 28}
              ry={120 + i * 22}
              fill="none"
              stroke="rgba(99,179,237,0.18)"
              strokeWidth="1.2"
            />
          ))}
        </svg>
      </div>

      {/* Heading */}
      <h2 className="impact-heading">
        Not just stats, its the impact we have created
      </h2>

      {/* Cards */}
      <div className="impact-cards">
        {stats.map((stat, index) => (
          <div className="impact-card" key={index}>
            <p className="card-label">{stat.label}</p>
            <p className="card-value">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricSection;
