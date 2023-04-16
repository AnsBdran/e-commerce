import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CartContext } from "../contexts/cart-context";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  const { isShowing, setIsShowing, cartItems, clearCart } =
    useContext(CartContext);
  const ifClass = isShowing ? "right-0 " : " -right-full";

  const hideCart = () => {
    setIsShowing(false);
  };

  return (
    <section
      className={
        "bg-slate-200 fixed top-0 transition-all min-h-screen w-full md:w-1/3" +
        " " +
        ifClass
      }
    >
      <div className="flex justify-end p-3 text-2xl">
        <BsArrowRight className="cursor-pointer" onClick={hideCart} />
      </div>
      <div>
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        {!cartItems && <p>there is no items added</p>}
      </div>
      <div className="border-t border-white bg-slate-800 text-slate-50">
        <h3>total</h3>
        <Button onClick={clearCart}>clear cart</Button>
      </div>
    </section>
  );
};

export default Cart;
