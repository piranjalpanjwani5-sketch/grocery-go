import "./Products.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ search, category }) {
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="products">
      <h2>Featured Products</h2>

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