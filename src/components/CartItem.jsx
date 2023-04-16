import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../contexts/cart-context";

const CartItem = ({ cartItem }) => {
  const { removeCartItem, addCartItem, deleteCartItem } =
    useContext(CartContext);
  return (
    <div className="bg-white mb-4 flex gap-4 p-3 shadow-md">
      <div className="w-8 flex justify-center items-center">
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="flex-1">
        <div className="flex">
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
          <span className="text-slate-400 min-w-[4rem] text-right mr-24">
            $ {cartItem.price}
          </span>
          <span className="min-w-[5rem] text-right">
            $ {cartItem.price * cartItem.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
