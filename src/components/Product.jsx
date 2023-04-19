import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

const Product = ({ product }) => {
  const { addCartItem } = useContext(CartContext);
  return (
    <div className="group">
      <div className="bg-white border border-slate-300 h-72 overflow-hidden  flex items-center justify-center relative  ">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 group-hover:scale-110 transition-all"
        />
        <div className="flex flex-col gap-1 absolute top-2 -right-12 opacity-0 group-hover:right-2 group-hover:opacity-100 transition-all text-white text-xl ">
          <div
            className=" p-3 bg-red-400 cursor-pointer"
            onClick={() => addCartItem(product)}
          >
            <AiOutlinePlus className="" />
          </div>
          <Link to={`product/${product.id}`}>
            <div className="bg-slate-800 p-3 cursor-pointer">
              <BsEye />
            </div>
          </Link>
        </div>
      </div>
      {/* product details in text */}
      <div className="mt-3">
        <p className="flex justify-between ">
          <span className="text-slate-400">{product.category}</span>
          <span className="text-red-500">$ {product.price}</span>
        </p>
        <Link to={`product/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Product;
