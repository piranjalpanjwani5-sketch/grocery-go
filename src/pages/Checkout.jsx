import "./Checkout.css";

function Checkout() {

  return (
    <div className="checkout">

      <h1>Checkout 🛒</h1>

      <form>

        <input 
          type="text" 
          placeholder="Full Name"
        />

        <input 
          type="text" 
          placeholder="Phone Number"
        />

        <input 
          type="text" 
          placeholder="Address"
        />

        <input 
          type="text" 
          placeholder="City"
        />


        <select>
          <option>
            Cash on Delivery
          </option>

          <option>
            Online Payment
          </option>

        </select>


        <button>
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;