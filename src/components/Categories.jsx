import "./Categories.css";

function Categories({ category, setCategory }) {
  const categories = [
    { name: "All", icon: "🛒" },
    { name: "Fruits", icon: "🍎" },
    { name: "Vegetables", icon: "🥦" },
    { name: "Dairy", icon: "🥛" },
    { name: "Beverages", icon: "🥤" },
    { name: "Bakery", icon: "🍞" },
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-container">
        {categories.map((item) => (
          <button
            key={item.name}
            className={`category-card ${
              category === item.name ? "active" : ""
            }`}
            onClick={() => setCategory(item.name)}
          >
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;