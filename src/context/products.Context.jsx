// import context for application
import { createContext, useContext, useEffect, useState } from "react";

// this function are used for geting values and adding values on firestore
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";

// import data for application
// import { categories } from "../constants";
import { db } from "../utils/firebase";
import toast from "react-hot-toast";

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

  const deleteProductHandler = async (categoryId, productId) => {
    try {
      const updatedCategories = productData.find((category) => {
        return category.id === categoryId;
      });

      const filteredProducts = updatedCategories.products.filter(
        (product) => product.id !== productId
      );
      // console.log(productData);
      // console.log(updatedCategories);
      // console.log(filteredProducts);
      // console.log({ ...updatedCategories, products: filteredProducts });

      const productDocRef = await doc(db, "products", categoryId);

      // console.log(productDocRef);
      await setDoc(productDocRef, {
        ...updatedCategories,
        products: filteredProducts,
      });

      setProductData({
        ...updatedCategories,
        products: filteredProducts,
      });

      toast.success("Successfully deleted!");
      console.log("Successfully deleted!");
    } catch (error) {
      console.error("Error deleting data:", error.message);
      toast.error("Error deleting Product!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const value = { productData, setProductData, getData, deleteProductHandler };

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
