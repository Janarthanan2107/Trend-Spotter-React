// react hooks
import { useNavigate } from "react-router-dom";
// icons
import { FaArrowRightLong } from "react-icons/fa6";
// content data
import { useProductGlobalContext } from "../../context/products.Context";
// styles
import "../category/categories.style.scss";

const Category = () => {
  const { productData, products } = useProductGlobalContext();
  // navigate to home
  let navigate = useNavigate();

  const navigateToShop = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="category-container">
      {products.map((item) => {
        const { id, title, description, imgUrl } = item;
        return (
          <div
            key={id}
            className="category"
            onClick={() => navigateToShop(title)}
          >
            <div className="cat-info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="cat-info-footer">
              Shop now <FaArrowRightLong className="arrow" />
            </div>
            <img src={imgUrl} alt="items" className="cat-img" />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
