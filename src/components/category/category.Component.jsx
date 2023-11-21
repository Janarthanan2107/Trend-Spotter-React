import { categories } from "../../constants";
import "../category/categories.style.scss"

import { FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  return (
    <div className="category-container">
      {categories.map((item) => {
        const { id, title, description, imgUrl } = item;
        return (
          <div key={id} className="category">
            <div className="cat-info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
              <div className="cat-info-footer">
                Shop now <FaArrowRightLong className="arrow"/>
              </div>
            <img src={imgUrl} alt="items" className="cat-img"/>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
