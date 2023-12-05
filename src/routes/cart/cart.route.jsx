// context
import { useNavigate } from "react-router-dom";
import { CartPage } from "../../components";

// styles
import "../cart/cart.style.scss";
import { useUserContext } from "../../context/user.Context";
import { useEffect } from "react";

const Cart = () => {
  const { user } = useUserContext();

  // navigate to home
  let navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signIn");
  };

  useEffect(() => {
    if (!user) {
      navigateToSignIn();
    }
  }, []);
  return (
    <div>
      <CartPage />
    </div>
  );
};

export default Cart;
