import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import BestSellers from "./components/BestSellers";
  import WhyChoose from "./components/WhyChoose";
import Newsletter from "./components/Newsletter";
 import ScrollTop from "./components/ScrollTop";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

useEffect(() => {

  setTimeout(() => {
    setLoading(false);
  }, 1500);

}, []);

if (loading) {
  return <Loader />;
}

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
             {search.trim() === "" && (
        <>
  <Hero />
  <Deals />
  <Categories
    category={category}
    setCategory={setCategory}
  />
  </>
             )}
  <Products
        search={search}
        category={category}
      />

       {search.trim() === "" && (
        <>
  <BestSellers />
  <WhyChoose />
  <Newsletter />
</>
   ) }
        </>
          }
          />

        <Route
          path="/shop"
          element={
            <Shop
              search={search}
              category={category}
            />
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

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route
         path="/about"
         element={<About />}
/>

       <Route
        path="/contact"
        element={<Contact />}
/>
<Route
  path="/product/:id"
  element={<ProductDetails />}
/>

<Route
  path="*"
  element={<NotFound />}
/>
      </Routes>

      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;