import heroImg1 from "../assets/products-hero-section-3.png";
import heroImg2 from "../assets/products-hero-section-2.png";
import heroImg3 from "../assets/products-hero-section-1.png";
import "../Styles/ProductsHero.css";

function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero-inner">
        <div className="products-hero-slashes">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="products-hero-content">
          <h1 className="products-hero-title">ERP 44</h1>
          <p className="products-hero-subtitle">
            Intelligent ERP, helping you to scale and manage your production
            from sales, production to invoicing.
          </p>
          <button
            className="btn btn-primary products-hero-btn"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Demo 📅
          </button>
        </div>

        <div className="products-hero-visual">

          <div className="ph-card ph-card--3">
            <img src={heroImg3} alt="ERP metrics view" />
          </div>

          <div className="ph-card ph-card--2">
            <div className="ph-mac-bar">
              <span className="ph-dot ph-dot--red"></span>
              <span className="ph-dot ph-dot--yellow"></span>
              <span className="ph-dot ph-dot--green"></span>
            </div>
            <img src={heroImg2} alt="ERP Dashboard" />
          </div>

          <div className="ph-card ph-card--1">
            <img src={heroImg1} alt="ERP sales view" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductsHero;
