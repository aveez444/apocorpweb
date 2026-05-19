import { NavLink } from "react-router-dom";
import "../Styles/Footer.css"

function Footer() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3 className="footer-brand">ApoCorp</h3>

          <p className="footer-description">
            Our mission is to serve our clients with best ERP solutions
          </p>

          <div className="footer-divider"></div>

          <div className="footer-contact">
            <p>✉ sales@apocorptech.com</p>
            <p>📞 +91 8767671680</p>
          </div>
        </div>

        <div className="footer-right">
          <NavLink to="/" className="footer-link">Home</NavLink>
          <NavLink to="/products" className="footer-link">Products</NavLink>
          <NavLink to="/about-us" className="footer-link">About Us</NavLink>
          <NavLink to="/blogs" className="footer-link">Blogs</NavLink>
          <a href="#contact-section" onClick={scrollToContact} className="footer-link">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved by Apocorp Technologies 2026</p>
      </div>
    </footer>
  )
}

export default Footer;