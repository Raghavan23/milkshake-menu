import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const milkshakeData = [
  {
    name: "Banana Milkshake",
    ingredients: "Banana, milk, vanilla ice cream, honey",
    price: 10,
    photoName: "milkshakes/banana-milkshake.jpg",
    soldOut: false,
  },
  {
    name: "Chocolate Milkshake",
    ingredients: "Cocoa powder, milk, chocolate ice cream, whipped cream",
    price: 11,
    photoName: "milkshakes/chocolate-milkshake.jpg",
    soldOut: false,
  },
  {
    name: "DragonFruit Milkshake",
    ingredients: "Dragonfruit, milk, vanilla ice cream, sugar syrup",
    price: 17,
    photoName: "milkshakes/dragonfruit-milkshake.jpg",
    soldOut: true,
  },
  {
    name: "Oreo Milkshake",
    ingredients: "Oreo cookies, milk, vanilla ice cream, chocolate syrup",
    price: 13,
    photoName: "milkshakes/oreo-milkshake.jpg",
    soldOut: false,
  },
  {
    name: "Strawberry Milkshake",
    ingredients: "Strawberries, milk, vanilla ice cream, sugar",
    price: 15,
    photoName: "milkshakes/strawberry-milkshake.jpg",
    soldOut: false,
  },
  {
    name: "Vanilla Milkshake",
    ingredients: "Vanilla extract, milk, vanilla ice cream, sugar",
    price: 10,
    photoName: "milkshakes/vanilla-milkshake.jpg",
    soldOut: false,
  },
  {
    name: "Mango Milkshake",
    ingredients: "Mango pulp, milk, vanilla ice cream, sugar",
    price: 14,
    photoName: "milkshakes/mango-milkshake.jpg",
    soldOut: false,
  },
  {
    name: "Kiwi Milkshake",
    ingredients: "Kiwi fruit, milk, vanilla ice cream, honey",
    price: 16,
    photoName: "milkshakes/kiwi-milkshake.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Shakes & Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <>
        <p>
          Browse your delicious range of creamy milkshakes, from classics to
          unique blends, all in one sweet menu app.
        </p>
        <ul className="milkshakes">
          {milkshakeData.map((milkshake) => (
            <MilkShake milkshakeObj={milkshake} key={milkshake.name} />
          ))}
        </ul>
      </>
    </main>
  );
}

function MilkShake(props) {
  return (
    <li className={`milkshake ${props.milkshakeObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.milkshakeObj.photoName} alt={props.milkshakeObj.name} />
      <div>
        <h3>{props.milkshakeObj.name}</h3>
        <p>{props.milkshakeObj.ingredients}</p>
        <span>
          {props.milkshakeObj.soldOut ? "SOLD OUT" : props.milkshakeObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or Order online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
