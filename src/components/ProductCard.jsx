import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
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
  );
}

export default ProductCard;