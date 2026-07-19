import "./Products.css";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ search, category }) {
  const [sort, setSort] = useState("");

  let filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes((search || "").toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        Number(a.price.replace("$", "")) -
        Number(b.price.replace("$", ""))
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        Number(b.price.replace("$", "")) -
        Number(a.price.replace("$", ""))
    );
  }

  return (
    <section className="products">
      <div className="products-header">
        <h2>Featured Products</h2>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2>No Products Found 😔</h2>
        )}
      </div>
    </section>
  );
}

export default Products;