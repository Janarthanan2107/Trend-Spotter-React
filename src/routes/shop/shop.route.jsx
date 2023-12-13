// component
import { useEffect } from "react";
import Products from "../../components/products/products.Component";

// context for products
import { useProductGlobalContext } from "../../context/products.Context";

// style
import "../shop/shop.style.scss";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Shop = () => {
  const { productData, getData } = useProductGlobalContext();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Products products={productData} />
    </>
  );
};

export default Shop;
