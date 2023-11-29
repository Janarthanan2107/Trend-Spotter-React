import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
// context for user
import { UserContextProvider } from "./context/user.Context.jsx";
// context for products
import { ProductsProvider } from "./context/products.Context.jsx";
import { CartProvider } from "./context/cart.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserContextProvider>
  </React.StrictMode>
);
