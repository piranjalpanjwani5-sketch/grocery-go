import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>🛒 Grocery Go</h2>

          <p>
            Fresh groceries delivered to your doorstep quickly,
            safely and at affordable prices.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p><FaPhone /> +92 300 1234567</p>

          <p><FaEnvelope /> support@grocerygo.com</p>

          <p><FaMapMarkerAlt /> Karachi, Pakistan</p>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebook />

            <FaInstagram />

            <FaTwitter />

          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Grocery Go. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;