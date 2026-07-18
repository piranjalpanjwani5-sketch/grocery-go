import "./Navbar.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">

      <div className="logo">
        🛒 Grocery Go
      </div>


      <div className="search-box">
        <FaSearch />
        <input 
          type="text" 
          placeholder="Search groceries..." 
        />
      </div>


      <ul className="nav-links">

        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          Products
        </li>

        <li>
          Categories
        </li>

        <li>
          Contact
        </li>

      </ul>


      <Link to="/cart" className="cart">

        <FaShoppingCart />

        <span>
          {cart.length}
        </span>

      </Link>


    </nav>
  );
}

export default Navbar;