import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Products />
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