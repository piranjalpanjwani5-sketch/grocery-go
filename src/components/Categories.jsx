import "./Categories.css";

function Categories() {
  const categories = [
    "🍎 Fruits",
    "🥦 Vegetables",
    "🥛 Dairy",
    "🥤 Beverages",
    "🍪 Snacks",
    "🍚 Grocery"
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-container">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;