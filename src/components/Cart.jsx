import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CartContext } from "../contexts/cart-context";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  const { isShowing, setIsShowing, cartItems, clearCart, total } =
    useContext(CartContext);
  const ifClass = isShowing ? "right-0 " : " -right-full";

  const hideCart = () => {
    setIsShowing(false);
  };

  return (
    <section
      className={
        "bg-slate-200 fixed top-0 transition-all h-screen w-full md:w-1/3 z-30 flex flex-col justify-between " +
        " " +
        ifClass
      }
    >
      <div className="flex justify-between items-center text-2xl px-4 py-2">
        <h3>Shopping Bag</h3>
        <BsArrowRight className="cursor-pointer" onClick={hideCart} />
      </div>
      <div className="px-3 bg-slate-300 shadow-inner py-3 overflow-y-auto flex-1">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        {!cartItems.length && (
          <p className="text-center capitalize text-2xl text-red-500 h-full flex justify-center items-center">
            there is no items added
          </p>
        )}
      </div>
      <div className="border-t border-white py-3 px-2 bg-slate-800 text-slate-50 shadow-lg">
        <h3 className="text-center">TOTAL: $ {total}</h3>
        {!!cartItems.length && (
          <Button
            onClick={clearCart}
            className="mt-4 w-full  bg-slate-50 text-slate-800 hover:bg-slate-200"
          >
            Clear cart
          </Button>
        )}
      </div>
    </section>
  );
};

export default Cart;
