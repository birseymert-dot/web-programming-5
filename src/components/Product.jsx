import Card from "./Card.jsx";

export default function Product({ title, price }) {
  return (
    <Card>
      <article className="product">
        <h2>{title}</h2>
      <p>Price: ${price.toLocaleString()}</p>
      </article>
    </Card>
  );
}
