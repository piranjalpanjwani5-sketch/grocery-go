import "./Navbar.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar({ search, setSearch }) {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="logo">🛒 Grocery Go</div>
      </Link>

      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search groceries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>Products</li>

        <li>Categories</li>

        <li>Contact</li>
      </ul>

      <Link
        to="/cart"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="cart">
          <FaShoppingCart />
          <span>{totalItems}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;