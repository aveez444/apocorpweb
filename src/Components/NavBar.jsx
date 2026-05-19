import { NavLink } from "react-router-dom"
import "../Styles/NavBar.css";
import { useState } from "react";
function NavBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <>
            <header className="navbar">
                <div className="navbar-logo">
                    <NavLink to="/" className="brand-link" onClick={closeMobileMenu}>ApoCorp</NavLink>
                </div>

                <nav className="navbar-links">
                    <NavLink to="/" end className="nav-link">
                        <span className="nav-link-text"> Home </span>
                        <span className="nav-planet-2"></span>
                    </NavLink>
                    <NavLink to="/products" className="nav-link">
                        <span className="nav-link-text">Products</span>
                        <span className="nav-planet-2"></span>
                    </NavLink>
                    <NavLink to="/about-us" className="nav-link">
                        <span className="nav-link-text">About Us</span>
                        <span className="nav-planet-2"></span>
                    </NavLink>
                    <NavLink to="/blogs" className="nav-link">
                        <span className="nav-link-text">Blogs</span>
                        <span className="nav-planet-2"></span>
                    </NavLink>
                </nav>

                <div className="navbar-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Start Free Trial →
                    </button>
                </div>

                <button
                    className={`hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-sidebar"
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
            <div
                className={`mobile-overlay ${mobileMenuOpen ? "show" : ""}`}
                onClick={closeMobileMenu}
            ></div>

            <aside
                id="mobile-sidebar"
                className={`mobile-sidebar ${mobileMenuOpen ? "open" : ""}`}
            >
                <div className="mobile-sidebar-header">
                    <span className="mobile-brand">ApoCorp</span>
                    <button
                        className="mobile-close-btn"
                        onClick={closeMobileMenu}
                        aria-label="Close menu"
                        type="button"
                    >
                        ×
                    </button>
                </div>

                <nav className="mobile-sidebar-links">
                    <NavLink to="/" end className="mobile-nav-link" onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className="mobile-nav-link" onClick={closeMobileMenu}>
                        Products
                    </NavLink>
                    <NavLink to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>
                        About Us
                    </NavLink>
                    <NavLink to="/blogs" className="mobile-nav-link" onClick={closeMobileMenu}>
                        Blogs
                    </NavLink>
                </nav>

                <button
                    className="btn btn-primary mobile-trial-btn"
                    onClick={() => {
                        closeMobileMenu();
                        document
                            .getElementById("contact-section")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Start Free Trial →
                </button>
            </aside>
        </>
    );


}
export default NavBar