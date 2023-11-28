// component
import Products from "../../components/products/products.Component";

// context for products
import { useProductGlobalContext } from "../../context/products.Context";

// style
import "../shop/shop.style.scss";

const Shop = () => {
  const { products } = useProductGlobalContext();

  return (
    <>
      <Products products={products} />
    </>
  );
};

export default Shop;
