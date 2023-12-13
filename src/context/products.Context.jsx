// import context for application
import { createContext, useContext, useEffect, useState } from "react";

// this function are used for geting values and adding values on firestore
import { collection, getDocs, query } from "firebase/firestore";

// import data for application
// import { categories } from "../constants";
import { db } from "../utils/firebase";

const ProductsContext = createContext({
  products: [],
});

// provider function
const ProductsProvider = ({ children }) => {
  // state that gets data from constant values
  // const [products, setProducts] = useState(categories);

  // state that gets data from firebase
  const [productData, setProductData] = useState([]);

  // get data of all products
  const getData = async () => {
    try {
      const productCollection = collection(db, "products");
      const productQuery = query(productCollection);
      const querySnapshot = await getDocs(productQuery);

      const productDataArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProductData(productDataArray);
    } catch (error) {
      console.error("Error fetching product data:", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(productData);

  const value = { productData, setProductData, getData };

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
