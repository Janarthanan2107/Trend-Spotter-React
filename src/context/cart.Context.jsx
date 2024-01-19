// import context for application
import { createContext, useContext, useEffect, useState } from "react";

// create a  functions for add update delete from cart
const addCartItem = (cartItems, cartItemToAdd) => {
  console.log("item:", cartItems);
  console.log("to add:", cartItemToAdd);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.title === cartItemToAdd.title
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.title === cartItemToAdd.title
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

// remove while count is lower then one
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.title === cartItemToRemove.title
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.title !== cartItemToRemove.title
    );
  } else {
    return cartItems.map((cartItem) =>
      cartItem.title === cartItemToRemove.title
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

// delete item from cart list
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(
    (cartItem) => cartItem.title !== cartItemToClear.title
  );
};

const CartContext = createContext({});

// provider function
const CartProvider = ({ children }) => {
  // states
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  console.log("Items in cart:", cartItems);

  useEffect(() => {
    const newCartCount = cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((prev, curr) => {
      return prev + curr.quantity * curr.price;
    }, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]);

  // add ,delete ,update function
  const addItemToCart = (cartItemToAdd) => {
    console.log("Add to cart data:", cartItemToAdd);
    setCartItems(addCartItem(cartItems, cartItemToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  // clear all items from cart
  const clearAllItems = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    cartCount,
    cartTotal,

    // functions
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    clearAllItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// custom hooks
const useCartGlobalContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartGlobalContext };
