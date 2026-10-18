import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

export default function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");

  return (
    <main className="dashboard">
      <h1>React Product Dashboard</h1>
      <button
        type="button"
        onClick={() => setShowProducts((isVisible) => !isVisible)}
        aria-expanded={showProducts}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>
      <div className="name-field">
        <label htmlFor="visitor-name">Your name</label>
        <input
          id="visitor-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name"
        />
      </div>
      <p>Hello, {name}</p>
      {showProducts && <ProductList />}
    </main>
  );
}
