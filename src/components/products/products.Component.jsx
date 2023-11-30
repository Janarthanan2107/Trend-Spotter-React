import { useParams } from "react-router-dom";

// icons
import { BsArrowRight } from "react-icons/bs";

// component
import ProductItems from "./productsItems.Component";
import CatePreview from "../category/category.Preview";

const Products = ({ products }) => {
  const { categoryId } = useParams();

  return (
    <div className="shop-container">
      <div className="category-heading">
        <h1>Men's Fashion</h1>
        {categoryId ? (
          <>
            <BsArrowRight />
            <p>All Category / {categoryId}</p>
          </>
        ) : (
          <>
            <BsArrowRight />
            <p>All Category</p>
          </>
        )}
      </div>
      {categoryId ? (
        <>
          <ProductItems products={products} />
        </>
      ) : (
        <>
          <CatePreview products={products} />
        </>
      )}
    </div>
  );
};

export default Products;
