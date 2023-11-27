import { useParams } from "react-router-dom";

// icons
import { BsArrowRight } from "react-icons/bs";

// index.js constant files
import { categories } from "../../constants";
import ProductItems from "./productsItems.Component";

const Products = () => {
  const { categoryId } = useParams();

  return (
    <div className="shop-container">
      <div className="category-heading">
        <h1>Men's Fashion</h1>
        {categoryId ? (
          <>
            <BsArrowRight />
            <p>{categoryId}</p>
          </>
        ) : (
          <>
            <BsArrowRight />
            <p>All Products</p>
          </>
        )}
      </div>
      <ProductItems categories={categories} />
    </div>
  );
};

export default Products;
