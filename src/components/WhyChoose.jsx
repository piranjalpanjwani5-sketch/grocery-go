import "./WhyChoose.css";
import {
  FaTruck,
  FaLeaf,
  FaTags,
  FaShieldAlt,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Get groceries delivered within 20-30 minutes.",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Products",
      text: "Farm-fresh fruits, vegetables and dairy every day.",
    },
    {
      icon: <FaTags />,
      title: "Best Prices",
      text: "Affordable prices with exciting daily offers.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Shopping",
      text: "Safe ordering experience with trusted service.",
    },
  ];

  return (
    <section className="why-choose">
      <h2>Why Choose Grocery Go?</h2>

      <div className="features">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;