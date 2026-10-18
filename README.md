# React Product Dashboard

A small Vite and React application that practices functional components, props, state, events, list rendering, and composition with `children`.

## File organization

- `src/App.jsx` is the root component. It owns the product visibility and visitor name state, and renders the controlled input and greeting.
- `src/components/ProductList.jsx` keeps the static product data and renders a `Product` for each item with its stable product ID as the key.
- `src/components/Product.jsx` displays product props inside a `Card`.
- `src/components/Card.jsx` is a reusable layout wrapper that renders its `children`.
- `src/main.jsx` mounts the app, while `src/App.css` contains the basic styles.
- `index.html`, `vite.config.js`, and `package.json` configure the Vite app and its scripts.

## Run the application

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Challenges faced

- Keeping the name input controlled means its displayed value always comes from React state and every edit updates that state through `onChange`.
- Product visibility is handled with conditional rendering, so the button label and the list stay synchronized with `showProducts`.
- The list uses each product's stable ID as its key, and the `Card` component stays independent of the content placed inside it.

The project intentionally uses no effects, API calls, context, reducers, or external component libraries.
