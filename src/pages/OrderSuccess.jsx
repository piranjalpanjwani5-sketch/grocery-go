import "./OrderSuccess.css";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p>Thank you for shopping with Grocery Go.</p>

        <div className="order-details">
          <p><strong>Order ID:</strong> GG10245</p>
          <p><strong>Estimated Delivery:</strong> 20 - 30 Minutes</p>
          <p><strong>Payment:</strong> Cash on Delivery</p>
        </div>

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;