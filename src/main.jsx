import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
// context for user
import { UserContextProvider } from "./context/user.Context.jsx";
// context for products
import { ProductsProvider } from "./context/products.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserContextProvider>
  </React.StrictMode>
);
