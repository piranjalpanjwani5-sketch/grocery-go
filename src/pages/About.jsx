import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Grocery Go</h1>

      <p>
        Grocery Go is an online grocery platform that helps customers
        order fresh fruits, vegetables, dairy products, beverages,
        snacks, and daily essentials from the comfort of their homes.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your groceries delivered in 20–30 minutes.</p>
        </div>

        <div className="about-card">
          <h3>🥬 Fresh Products</h3>
          <p>We provide high-quality and fresh groceries every day.</p>
        </div>

        <div className="about-card">
          <h3>💰 Best Prices</h3>
          <p>Affordable prices with exciting daily offers.</p>
        </div>
      </div>
    </div>
  );
}

export default About;