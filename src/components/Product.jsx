import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const Product = ({ product }) => {
  return (
    <div className="group relative flex-auto">
      <div className="bg-white border border-slate-300 m-4 p-8 h-72 flex items-center justify-center relative  ">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 group-hover:scale-110 transition-all"
        />
        <div className="flex flex-col absolute top-2 -right-11 opacity-0 group-hover:right-2 group-hover:opacity-100 transition-all p-3 bg-red-400 text-white text-xl ">
          <AiOutlinePlus />
          <Link to={`product/${product.id}`}>
            <BsEye />
          </Link>
        </div>
      </div>
      <Link to={`product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
    </div>
  );
};

export default Product;
