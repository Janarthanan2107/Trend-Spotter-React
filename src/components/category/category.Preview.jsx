import { useNavigate } from "react-router-dom";
import ProductCard from "../products/productCard.Component";
import { useEffect, useState } from "react";

const CatePreview = ({ products }) => {
  let navigate = useNavigate();

  const navigateToCategory = (id) => {
    console.log(id);
    navigate(`/shop/${id}`);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    if (Array.isArray(products)) {
      setFilteredProducts(products);
      setLoading(false);
    } else {
      console.error("Products is not an array:", products);
      // You might want to handle this case differently based on your application's requirements
    }
  };

  useEffect(() => {
    fetchData();
  }, [products]);

  return (
    <div className="product-category-container">
      {loading ? ( // Show loading text if loading is true
        <div>Loading...</div>
      ) : filteredProducts.length === 0 ? ( // Show "No records found!" if no products
        <div style={{ color: "gray" }}>No records found!</div>
      ) : (
        filteredProducts.map((category) => {
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
                            <ProductCard
                              key={product.id}
                              cateId={category.id}
                              product={product}
                            />
                          );
                        })}
                  </>
                ) : (
                  <div style={{ color: "gray" }}>No products found!</div>
                )}
              </div>
            </span>
          );
        })
      )}
    </div>
  );
};

export default CatePreview;
