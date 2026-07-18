import "./Deals.css";

function Deals() {
  const deals = [
    {
      title: "Fresh Mangoes",
      offer: "20% OFF",
      emoji: "🥭",
    },
    {
      title: "Fresh Milk",
      offer: "Buy 1 Get 1",
      emoji: "🥛",
    },
    {
      title: "Fresh Bread",
      offer: "Only $2",
      emoji: "🍞",
    },
  ];

  return (
    <section className="deals">
      <h2>🔥 Today's Deals</h2>

      <div className="deals-container">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <div className="emoji">{deal.emoji}</div>
            <h3>{deal.title}</h3>
            <p>{deal.offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deals;