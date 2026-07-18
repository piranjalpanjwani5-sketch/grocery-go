import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <BrowserRouter>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <Categories
                category={category}
                setCategory={setCategory}
              />

              <Products
                search={search}
                category={category}
              />
            </>
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;