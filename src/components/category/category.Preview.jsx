import { useNavigate } from "react-router-dom";
import ProductCard from "../products/productCard.Component";

const CatePreview = ({ products }) => {
  let navigate = useNavigate();

  const navigateToCategory = (id) => {
    console.log(id);
    navigate(`/shop/${id}`);
  };

  return (
    <div className="product-category-container">
      {products.map((category) => {
        return (
          <span key={category.id}>
            <div className="product-category">
              <p className="product-category-title">{category.category}</p>
              <button onClick={() => navigateToCategory(category.category)}>
                Show more
              </button>
            </div>

            <div className="product-card-container">
              {category.products.length > 0 ? (
                <>
                  {category.products &&
                    category.products
                      .filter((product, index) => index < 3)
                      .map((product) => {
                        return (
                          <ProductCard key={product.id} product={product} />
                        );
                      })}
                </>
              ) : (
                <div style={{ color: "gray" }}>No products found!</div>
              )}
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default CatePreview;
