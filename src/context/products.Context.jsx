// import context for application
import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

// import data for application
import { categories } from "../constants";
import { db } from "../utils/firebase";

const ProductsContext = createContext({
  products: [],
});

// provider function
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(categories);

  const [productData, setProductData] = useState([]);

  const getData = async () => {
    try {
      const userCollection = collection(db, "products");
      const queries = query(userCollection);

      const querySnapShot = await getDocs(queries);

      let productDataArray = [];
      querySnapShot.forEach((doc) => {
        productDataArray.push({ ...doc.data(), id: doc.id });
      });

      setProductData(productDataArray);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(productData);

  const value = { products, setProducts,productData };

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
