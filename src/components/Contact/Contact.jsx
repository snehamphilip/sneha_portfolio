import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxsn5qa",
        "template_rxquw8f",
        form.current,
        "7M82TySMOxRjQbEpQ"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Get In Touch
      </h2>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <FaEnvelope />
            <h4>Email</h4>
            <p>snehamphilip2004@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt />
            <h4>Phone</h4>
            <p>+91 8590985992</p>
          </div>

          <div className="contact-social">

            <a
              href="https://github.com/snehamphilip"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/snehamphilip"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;