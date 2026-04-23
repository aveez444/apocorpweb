import "../Styles/AboutUsPage.css";

function AboutUsPage() {
  return (
    <section className="about-us-section" id="about">
      <div className="about-us-container">
        <div className="about-us-content">
          <p className="about-us-kicker">About ApoCorp</p>

          <h2 className="about-us-title">
            Built to connect every part of your business.
          </h2>

          <p className="about-us-text">
            ApoCorp develops enterprise software that unifies sales, operations, inventory, and production into a single system, helping organizations improve coordination, streamline workflows, and operate with greater clarity.
          </p>

          <p className="about-us-text">
            Our mission is to simplify complex workflows and give businesses
            better visibility across every stage of operation. We design
            practical tools that reduce manual effort, improve coordination,
            and support confident decision-making.
          </p>

          <p className="about-us-text">
            At ApoCorp, we believe enterprise software should feel intuitive,
            reliable, and built for real-world use. That is why we focus on
            clean design, scalable architecture, and features that teams
            actually need.
          </p>
        </div>

        <div className="about-us-cards">
          <div className="about-card">
            <span className="about-card-label">Our Mission</span>
            <h3>Simplify operations</h3>
            <p>
              Help businesses replace scattered tools with one connected ERP
              platform.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-label">Our Focus</span>
            <h3>Connected workflows</h3>
            <p>
              Bring sales, inventory, production, and dispatch into one
              coordinated system.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-label">Our Promise</span>
            <h3>Reliable and scalable</h3>
            <p>
              Build software that grows with your business and stays easy to
              use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;