import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../contexts/cart-context";

const CartItem = ({ cartItem }) => {
  const { removeCartItem, addCartItem, deleteCartItem } =
    useContext(CartContext);
  const totalPrice = (cartItem.price * cartItem.quantity).toFixed(2);
  return (
    <div className="bg-white mb-4 flex gap-4 p-2 shadow-md min-h-[100px]">
      <div className="basis-16 flex justify-center items-center">
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="flex-auto flex flex-col justify-around">
        <div className="flex justify-between gap-3">
          <h4 className="leading-5 flex-auto">{cartItem.title}</h4>
          <div className="bg-slate-50 hover:bg-white self-start p-[2px] rounded-lg">
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => deleteCartItem(cartItem.id)}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {/* increment decrement buttons */}
          <div className="flex gap-2  w-max items-stretch bg-slate-800">
            <span
              className="increment-decrement"
              onClick={() => removeCartItem(cartItem)}
            >
              <AiOutlineMinus />
            </span>
            <span className="min-w-[2.2rem] text-center select-none px-1 text-white">
              {cartItem.quantity}
            </span>
            <span
              className="increment-decrement"
              onClick={() => addCartItem(cartItem)}
            >
              <AiOutlinePlus />
            </span>
          </div>
          <span className="text-slate-400 text-right ">$ {cartItem.price}</span>
          <span className=" text-right">$ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
