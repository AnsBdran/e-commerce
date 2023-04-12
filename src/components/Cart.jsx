import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CartContext } from "../contexts/cart-context";

const Cart = () => {
  const { isShowing, setIsShowing } = useContext(CartContext);
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
    </section>
  );
};

export default Cart;
