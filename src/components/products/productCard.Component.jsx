import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useCartGlobalContext } from "../../context/cart.Context";
const ProductCard = ({ product }) => {
  const { id, image, title, rating, price } = product;

  const { addItemToCart } = useCartGlobalContext();

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

  return (
    <div className="product-card">
      <span className="img-container">
        <p>Men's</p>
        <img src={image} alt="t-shirt" />
      </span>
      <span className="title-container">
        <p>{title}</p>

        <ProductRating rate={rating.rate} />
      </span>
      <span className="price-container">
        <p>${price}</p>
      </span>
      <div className="cart-btn-container">
        <button onClick={() => addToCartHandler(product)}>
          <FaCartShopping />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
