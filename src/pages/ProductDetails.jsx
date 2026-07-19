import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/Products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1 style={{ textAlign: "center" }}>Product Not Found</h1>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    alert("✅ Product Added Successfully");
  };

  return (
    <div className="product-details-page">

      <div className="left">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="right">

        <h1>{product.name}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐
          <span> (4.8)</span>
        </div>

        <h2>{product.price}</h2>

        <p className="description">
          Fresh premium quality {product.name}.
          Carefully selected for the best taste,
          freshness and quality.
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p className="stock">
          ✅ In Stock
        </p>

        <div className="qty-box">

          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>

        </div>

        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          🛒 Add To Cart
        </button>

        <div className="delivery">

          <h3>🚚 Delivery</h3>

          <p>Estimated Delivery: 20-30 Minutes</p>

          <p>Cash on Delivery Available</p>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;