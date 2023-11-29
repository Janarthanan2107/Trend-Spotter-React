import { useNavigate } from "react-router-dom";
import { useCartGlobalContext } from "../../context/cart.Context";

import CartItemComponent from "../cart/cartItem.Component";

const Cart = () => {
  const { cartItems, cartTotal } = useCartGlobalContext();

  const navigate = useNavigate();

  const gotoShop = () => {
    navigate("/shop");
  };

  return (
    <div className="cart">
      <div className="cart-heading">
        <h1>Trends Cart</h1>
      </div>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem) => {
              return (
                <CartItemComponent key={cartItem.id} cartItem={cartItem} />
              );
            })}
          </>
        ) : (
          <div className="message">
            <h1>No Records found!!</h1>
            <button onClick={gotoShop}>Go to shop</button>
          </div>
        )}

      <div className="total">
        <p>Total:</p>
        <p>${cartTotal}</p>
      </div>
    </div>
  );
};

export default Cart;
