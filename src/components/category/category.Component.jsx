import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useProductGlobalContext } from "../../context/products.Context";
import "../category/categories.style.scss";

const Category = () => {
  const { productData } = useProductGlobalContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateToShop = (id) => {
    navigate(`/shop/${id}`);
  };

  useEffect(() => {
    if (productData.length > 0) {
      setLoading(false);
    }
  }, [productData]);

  return (
    <div className="category-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        productData.map((item) => {
          const { id, category, description, imgUrl } = item;
          return (
            <div
              key={id}
              className="category"
              onClick={() => navigateToShop(category)}
            >
              <div className="cat-info">
                <h1>{category}</h1>
                <p>{description}</p>
              </div>
              <div className="cat-info-footer">
                Shop now <FaArrowRightLong className="arrow" />
              </div>
              <img src={imgUrl} alt="items" className="cat-img" />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Category;
