import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./productCard.Component";
import toast, { Toaster } from "react-hot-toast";

const ProductItems = ({ products }) => {
  const { categoryId } = useParams();
  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate(`/shop`);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = () => {
    if (Array.isArray(products)) {
      const updatedProducts = products.filter((product) => {
        return product.category === categoryId;
      });

      setFilteredProducts(updatedProducts);
    } else {
      console.error("Products is not an array:", products);
      // You might want to handle this case differently based on your application's requirements
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId, products]);

  return (
    <div className="product-category-container">
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
            marginTop: "50px",
          },
        }}
      />
      {filteredProducts.length === 0 ? (
        <div style={{ color: "gray" }}>No products found!</div>
      ) : (
        filteredProducts.map((category) => (
          <span key={category.id}>
            <div className="product-category">
              <p className="product-category-title">{category.category}</p>
              <button onClick={navigateToShop}>All category</button>
            </div>
            <div className="product-card-container">
              {category.products.length > 0 ? (
                category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    cateId={category.id}
                    product={product}
                  />
                ))
              ) : (
                <div style={{ color: "gray" }}>No products found!</div>
              )}
            </div>
          </span>
        ))
      )}
    </div>
  );
};

export default ProductItems;
