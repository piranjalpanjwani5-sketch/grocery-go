import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <h2>📩 Subscribe & Get 20% OFF</h2>

      <p>
        Subscribe to receive exclusive offers, discounts and latest updates.
      </p>

      <div className="newsletter-box">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </div>

    </section>
  );
}

export default Newsletter;