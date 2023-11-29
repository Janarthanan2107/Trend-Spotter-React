import { RiDeleteBin2Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";

import { useCartGlobalContext } from "../../context/cart.Context";

const cartItem = ({ cartItem }) => {
  console.log(cartItem);
  const { id, title, image, price, quantity, rating } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useCartGlobalContext();

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="cart-item-container" key={id}>
      <div className="cart-item">
        <div className="cart-image-container">
          <img src={image} alt={title}></img>
          <p>{title}</p>
        </div>
        <div className="count-container">
          <div className="stock-container">
            <p>Stock:</p>
            <span className="stock-count">
              <p>{rating.count}</p>
            </span>
          </div>
          <div className="quantity-container">
            <p>Quantity:</p>
            <span className="quantity-count">
              <HiMinusSm
                className="icon"
                onClick={() => removeItemHandler(cartItem)}
              />
              <p>{quantity}</p>
              <GoPlus
                className="icon"
                onClick={() => addItemHandler(cartItem)}
              />
            </span>
          </div>
        </div>
        <div className="price-container">
          <p>Price: ${price}</p>
          <p className="remove" onClick={() => clearItemHandler(cartItem)}>
            <RiDeleteBin2Line />
          </p>
        </div>
      </div>
    </div>
  );
};

export default cartItem;
