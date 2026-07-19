import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      {product.bestseller && (
        <div className="badge best">
          🔥 Best Seller
        </div>
      )}

      <div className="badge discount">
        {product.discount}
      </div>

      <Link
        to={`/product/${product.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
        />

        <div className="product-details">

          <h3>{product.name}</h3>

          <div className="rating">
            ⭐ {product.rating}
          </div>

          <p>{product.price}</p>

          <small>🚚 Free Delivery</small>

        </div>
      </Link>

      <button
        className="add-btn"
        onClick={() => addToCart(product)}
      >
        🛒 Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;