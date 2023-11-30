import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useCartGlobalContext } from "../../context/cart.Context";
import { useNavigate } from "react-router-dom";

const CatePreview = ({ products }) => {
  const { addItemToCart } = useCartGlobalContext();
  let navigate = useNavigate();

  const addToCartHandler = (product) => {
    addItemToCart(product);
  };

  const ProductRating = ({ rate }) => {
    const starArray = Array.from({ length: rate });

    return (
      <div className="rating">
        {starArray.map((item, index) => (
          <FaStar key={index} />
        ))}
      </div>
    );
  };

  const navigateToCategory = (id) => {
    console.log(id)
    navigate(`/shop/${id}`);
  };

  return (
    <div className="product-category-container">
      {products.map((category) => {
        return (
          <span key={category.id}>
            <div className="product-category">
              <p className="product-category-title">{category.title}</p>
              <button onClick={() => navigateToCategory(category.title)}>
                Show more
              </button>
            </div>

            <div className="product-card-container">
              {category.products &&
                category.products
                  .filter((product, index) => index < 3)
                  .map((product) => {
                    return (
                      <div className="product-card" key={product.id}>
                        <span className="img-container">
                          <p>Men's</p>
                          <img src={product.image} alt="t-shirt" />
                        </span>
                        <span className="title-container">
                          <p>{product.title}</p>

                          <ProductRating rate={product.rating.rate} />
                        </span>
                        <span className="price-container">
                          <p>$145.00</p>
                        </span>
                        <div className="cart-btn-container">
                          <button onClick={() => addToCartHandler(product)}>
                            <FaCartShopping />
                            Add to cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default CatePreview;
