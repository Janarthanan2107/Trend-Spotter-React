import { useNavigate } from "react-router-dom";
import { useCartGlobalContext } from "../../context/cart.Context";

import CartItemComponent from "../cart/cartItem.Component";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const { cartItems, cartTotal, clearAllItems } = useCartGlobalContext();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const gotoShop = () => {
    navigate("/shop");
  };

  const proceedCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Add Some Products to the cart!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.loading("Your order is placing", { duration: 2000 });
    }, 1000);

    setTimeout(() => {
      clearAllItems();
      setLoading(false);
      toast.success("Your Order is Placed!");
    }, 4000);
  };

  return (
    <div className="cart">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            marginTop: "50px",
          },
        }}
      />
      <div className="cart-heading">
        <h1>Trends Cart</h1>
        <button type="button" onClick={proceedCheckout} disabled={loading}>
          {loading ? "Proceeding..." : "Proceed to checkout"}
        </button>
      </div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem) => {
            return <CartItemComponent key={cartItem.id} cartItem={cartItem} />;
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
