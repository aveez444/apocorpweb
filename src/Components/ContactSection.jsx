import "../Styles/ContactSection.css";
import contactPattern from "../assets/contact-section-background.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactSection() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_ponnhba", // replace with your actual service id
        "template_1izemuc", // replace with your template id
        formRef.current,
        {
          publicKey: "AkPNL39hS93a4-BaG", // replace with your public key
        }
      );

      setStatus("Message sent successfully.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-pattern contact-pattern-left">
        <img src={contactPattern} alt="" />
      </div>

      <div className="contact-pattern contact-pattern-right">
        <img src={contactPattern} alt="" />
      </div>

      <div className="contact-shell">
        <h2 className="contact-heading">Get in touch with us</h2>

        <div className="contact-grid">
          <div className="contact-form-card">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                name="business_email"
                placeholder="Business Email"
                required
              />
              <input
                type="text"
                name="contact_number"
                placeholder="Contact Number"
                required
              />
              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                required
              />

              <div className="contact-action">
                <button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send"}
                </button>
              </div>

              {status && <p className="contact-status">{status}</p>}
            </form>
          </div>

          <div className="contact-info">
            <h3>What’s next?</h3>

            <div className="contact-step">
              <h4>Initial Confirmation</h4>
              <p>
                We will send a short email notifying you that we successfully
                received your request and started working on it.
              </p>
            </div>

            <div className="contact-step">
              <h4>Requirement Analysis</h4>
              <p>
                Our advisor analyzes your requirements and will reach back to
                you within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
