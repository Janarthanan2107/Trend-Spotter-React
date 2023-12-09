// component
import Products from "../../components/products/products.Component";

// context for products
import { useProductGlobalContext } from "../../context/products.Context";

// style
import "../shop/shop.style.scss";

const Shop = () => {
  const { productData } = useProductGlobalContext();

  return (
    <>
      <Products products={productData} />
    </>
  );
};

export default Shop;
