// import context for application
import { createContext, useContext, useState } from "react";

// import data for application
import { categories } from "../constants";

const ProductsContext = createContext({
  products: [],
});

// provider function
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(categories);

  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// custom hooks
const useProductGlobalContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider, useProductGlobalContext };