import "./BestSellers.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function BestSellers() {

  const bestProducts = products.filter(
    (product) => product.bestseller
  );

  return (
    <section className="best-sellers">

      <h2>🔥 Best Sellers</h2>

      <p>
        Most loved products by our customers
      </p>

      <div className="best-grid">

        {bestProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default BestSellers;