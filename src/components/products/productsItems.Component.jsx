import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductItems = ({ categories }) => {
  const ProductRating = ({ rate }) => {
    const starArray = Array.from({ length: rate });

    return (
      <div className="rating">
        {starArray.map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="product-category-container">
      {categories.map((category) => {
        return (
          <>
            <div className="product-category">
              <p className="product-category-title">{category.title}</p>
            </div>

            <div className="product-card-container">
              {category.products &&
                category.products.map((product) => {
                  return (
                    <div className="product-card" key={product.id}>
                      <span className="img-container">
                        <p>Men's</p>
                        <img src={product.image} alt="t-shirt" />
                      </span>
                      <span className="title-container">
                        <p>Amazing Custom T-shirt Design</p>

                        <ProductRating rate={product.rating.rate} />
                      </span>
                      <span className="price-container">
                        <p>$145.00</p>
                      </span>
                      <div className="cart-btn-container">
                        <button><FaCartShopping/>Add to cart</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductItems;
