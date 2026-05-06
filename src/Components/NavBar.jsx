import { NavLink } from "react-router-dom"
import "../Styles/NavBar.css";
function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" className="brand-link">ApoCorp</NavLink>
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

        </header>
    )


}
export default NavBar