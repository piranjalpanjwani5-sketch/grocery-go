import "./Checkout.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, totalItems, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const placeOrder = (e) => {
    e.preventDefault();

    alert("🎉 Order Placed Successfully!");

    navigate("/order-success");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={placeOrder}>
          <input type="text" placeholder="Full Name" required />

          <input type="tel" placeholder="Phone Number" required />

          <input type="text" placeholder="City" required />

          <textarea
            placeholder="Delivery Address"
            rows="4"
            required
          ></textarea>

          <div className="payment">
            <h3>Payment Method</h3>

            <label>
              <input
                type="radio"
                name="payment"
                defaultChecked
              />
              Cash on Delivery
            </label>
          </div>

          <button type="submit">
            Place Order
          </button>
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <p>Total Items: {totalItems}</p>

          <p>Total Price: ${totalPrice.toFixed(2)}</p>

          <hr />

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;