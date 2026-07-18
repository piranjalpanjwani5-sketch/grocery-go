import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <span className="offer">🔥 Up to 40% OFF on Fresh Groceries</span>

        <h1>
          Fresh Groceries <br />
          Delivered in <span>30 Minutes</span>
        </h1>

        <p>
          Buy fresh fruits, vegetables, dairy products, beverages and all your
          daily essentials at the best prices with fast home delivery.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="learn-btn">Learn More</button>
        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
          alt="Groceries"
        />

      </div>

    </section>
  );
}

export default Hero;