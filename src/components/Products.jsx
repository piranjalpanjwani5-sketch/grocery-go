import "./Products.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-details">
              <h3>{product.name}</h3>

              <div className="rating">
                ⭐⭐⭐⭐⭐
              </div>

              <p>{product.price}</p>

              <small>🚚 Free Delivery</small>

              <button onClick={() => addToCart(product)}>
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;