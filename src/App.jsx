import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
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
              {search.trim() === "" ? (
                <>
                  <Hero />

                  <Deals />

                  <Categories
                    category={category}
                    setCategory={setCategory}
                  />
                </>
              ) : (
                <section
                  style={{
                    padding: "40px 20px",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "32px",
                      color: "#16a34a",
                    }}
                  >
                    🔍 Search Results
                  </h2>

                  <p>
                    Showing results for <b>"{search}"</b>
                  </p>
                </section>
              )}

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