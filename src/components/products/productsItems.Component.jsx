import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./productCard.Component";

const ProductItems = ({ products }) => {
  const { categoryId } = useParams();
  console.log(categoryId);

  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate(`/shop`);
  };

  // Filter products based on categoryId
  const filteredProducts = categoryId
    ? products.filter((category) => category.category === categoryId)
    : products;

  console.log(
    "filtering:",
    products.filter((category) => category.category === categoryId)
  );

  console.log(filteredProducts);
  return (
    <div className="product-category-container">
      {filteredProducts.map((category) => {
        // console.log(category);
        return (
          <span key={category.id}>
            <div className="product-category">
              <p className="product-category-title">{category.category}</p>
              <button onClick={navigateToShop}>All category</button>
            </div>

            <div className="product-card-container">
              {category.products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default ProductItems;
