// import context for application
import { createContext, useContext, useEffect, useState } from "react";

// this function are used for geting values and adding values on firestore
import {
  collection,
  getDocs,
  query,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// import data for application
import { categories } from "../constants";
import { db } from "../utils/firebase";

const ProductsContext = createContext({
  products: [],
});

// provider function
const ProductsProvider = ({ children }) => {
  // state that gets data from constant values
  const [products, setProducts] = useState(categories);

  // state that gets data from firebase
  const [productData, setProductData] = useState([]);

  // get data of all products
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

  const value = { setProducts, productData };

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
