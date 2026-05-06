import dashboard from "../assets/HomePageHero/dashboard.png";
// import background from "../assets/HomePageHero/background.png";
import background from "../assets/HomePageHero/background.webp";
import "../Styles/HeroSection.css";

function Hero() {
    return (
        <section className="hero">
            <div
                className="hero-bg-swirl"
                style={{ backgroundImage: `url(${background})` }}
            ></div>

            <div className="hero-content">
                <h2>Next-Gen ERP Systems</h2>
                <h2>Built for agile and robust environments</h2>

                <div className="hero-buttons">
                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Book a Demo 📅
                    </button>
                </div>
            </div>

            <div className="hero-visual">
                <img src={dashboard} alt="3D ERP Dashboard Mockup" />
            </div>

        </section>
    )
}

export default Hero;