import Product from "./Product.jsx";

const products = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Phone", price: 800 },
  { id: 3, title: "Tablet", price: 600 },
];

export default function ProductList() {
  return (
    <section aria-labelledby="products-heading">
      <h2 id="products-heading">Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </section>
  );
}
