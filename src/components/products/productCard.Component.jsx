import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useCartGlobalContext } from "../../context/cart.Context";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { id, image, title, rating, price } = product;

  const { addItemToCart } = useCartGlobalContext();

  // hooks
  const [dialog, setDialog] = useState(false);

  const productDialogOpen = () => {
    setDialog(true);
  };

  const productDialogClose = () => {
    setDialog(false);
  };

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
        <img src={image} alt="t-shirt" onClick={productDialogOpen} />
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

      <div className="product-dialog">
        <div className={`overlay ${dialog ? "open" : "close"}`}>
          <div className="model-container">
            <div className="close-btn" onClick={productDialogClose}>
              <FaTimes />
            </div>
            <h3>Confirmation!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem debitis quibusdam quod maiores ab similique ratione
              corrupti animi repellendus perferendis eveniet vero rerum,
              laboriosam velit dolore dolorum nesciunt atque voluptatibus magnam
              eaque illo nostrum earum suscipit sunt. Minima explicabo ea eos
              neque fuga? Ab ,alias?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
