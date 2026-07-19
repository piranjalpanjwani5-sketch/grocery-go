import Products from "../components/Products";

function Shop({ search, category }) {
  return (
    <div style={{ paddingTop: "30px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#16a34a",
          marginBottom: "30px",
        }}
      >
        🛍 Shop
      </h1>

      <Products
        search={search}
        category={category}
      />
    </div>
  );
}

export default Shop;