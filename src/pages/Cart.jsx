import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const { 
    cart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity 
  } = useContext(CartContext);


  return (
    <div className="cart-page">

      <h1>Your Cart 🛒</h1>


      {cart.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        <>
          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img 
                src={item.image} 
                alt={item.name} 
              />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>{item.price}</p>


                <div className="quantity">

                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>

                </div>


                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}


          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>

        </>

      )}

    </div>
  );
}

export default Cart;