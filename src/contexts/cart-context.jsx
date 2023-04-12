import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [cartItems, setCartItems] = useState();

  const addCartItem = () => {
    console.log("added item");
  };

  const removeCartItem = () => {
    console.log("remove item");
  };

  const value = {
    isShowing,
    setIsShowing,
    cartItems,
    addCartItem,
    removeCartItem,
  };
  console.log("context is", isShowing);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
