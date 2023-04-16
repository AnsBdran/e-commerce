import { createContext, useState } from "react";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} from "../utils/helpers";
import { toast } from "react-toastify";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (product) => {
    console.log("added item", product.title);
    setCartItems(addItemToCart(cartItems, product));
  };

  const removeCartItem = (cartItem) => {
    console.log("remove item");
    setCartItems(removeItemFromCart(cartItems, cartItem));
    // toast("deleted item");
  };

  const deleteCartItem = (id) => {
    setCartItems(deleteItemFromCart(cartItems, id));
  };

  const clearCart = () => {
    console.log("cleared");
    setCartItems([]);
  };

  const numberOfCartItems = cartItems.length;

  const value = {
    isShowing,
    setIsShowing,
    cartItems,
    addCartItem,
    removeCartItem,
    deleteCartItem,
    clearCart,
    numberOfCartItems,
  };
  console.log("context is", isShowing);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
