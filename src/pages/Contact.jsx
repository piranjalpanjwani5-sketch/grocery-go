import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Email Address" required />

        <textarea
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;