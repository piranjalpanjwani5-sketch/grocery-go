import "./Navbar.css";
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar({ search, setSearch }) {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <Link to="/" className="logo-link">
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

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

      </ul>

      <Link to="/cart" className="cart">
        <FaShoppingCart />
        <span>{totalItems}</span>
      </Link>

    </nav>
  );
}

export default Navbar;