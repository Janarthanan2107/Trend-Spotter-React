import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./productCard.Component";
import { useEffect, useState } from "react";

const ProductItems = ({ products }) => {
  const { categoryId } = useParams();
  console.log(categoryId);

  console.log(products);

  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate(`/shop`);
  };

  // Filter products based on categoryId
  // const filteredProducts = categoryId
  //   ? products.filter((category) => category.category === categoryId)
  //   : products;

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on categoryId when the component mounts or categoryId changes
    const filtered = categoryId
      ? products.filter((category) => category.category === categoryId)
      : products;

    setFilteredProducts(filtered);
  }, [categoryId, products]);
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
