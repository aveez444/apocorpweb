import dashboard from "../assets/ProductsPage/features-section-dashboard.png";
import feature1 from "../assets/ProductsPage/features-section-1.png";
import feature2 from "../assets/ProductsPage/features-section-2.png";
import feature3 from "../assets/ProductsPage/features-section-3.png";
import feature4 from "../assets/ProductsPage/features-section-4.png";
import "../Styles/FeaturesSection.css";

const features = [
  {
    id: 1,
    title: "Product Master",
    img: feature1,
    // subtitle: "Initial Confirmation",
    desc: "Centralize your entire product catalog in one place. Add, edit, and organize items with detailed attributesSKUs, descriptions, pricing tiers, units of measure, and tax categories. Keep inventory data accurate and accessible across all modules.",
  },
  {
    id: 2,
    title: "Quotation",
    img: feature2,
    // subtitle: "Initial Confirmation",
    desc: "Generate professional quotations in minutes. Pull products directly from your catalog, apply custom pricing or discounts, and send polished proposals to clients. Track quotation status and convert accepted quotes to orders with a single click.",
  },
  {
    id: 3,
    title: "Order Details",
    img: feature3,
    // subtitle: "Initial Confirmation",
    desc: "View and manage every aspect of an order from a single screen. Monitor line items, quantities, pricing, delivery schedules, and fulfillment status. Edit orders on the fly and maintain a complete audit trail of all changes.",
  },
  {
    id: 4,
    title: "Proforma Invoice",
    img: feature4,
    // subtitle: "Initial Confirmation",
    desc: "Create proforma invoices for advance payments, customs declarations, or pre-shipment approvals. Auto-populate buyer and product details, specify payment terms, and export to PDF for immediate sharing with clients or authorities.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      {/* Full-width banner image at top */}
      <div className="features-banner">
        <img src={dashboard} alt="Feature banner" />
        <div className="features-banner-overlay"></div>
      </div>

      {/* Alternating rows */}
      <div className="features-rows">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`features-row ${index % 2 === 0 ? "features-row--img-left" : "features-row--img-right"}`}
          >
            <div className="features-row-image">
              <img src={feature.img} alt={feature.title} />
            </div>
            <div className="features-row-content">
              <h3 className="features-row-title">{feature.title}</h3>
              <h4 className="features-row-subtitle">{feature.subtitle}</h4>
              <p className="features-row-desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
