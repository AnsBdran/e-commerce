import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart-context";
import Logo from "../assets/logo.svg";

const Header = () => {
  const { setIsShowing, numberOfCartItems } = useContext(CartContext);

  const showCart = () => {
    console.log("hi you");
    setIsShowing((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center text-3xl py-2 px-4">
      <Link to="/">
        <img src={Logo} alt="store logo" className="w-8" />
      </Link>
      <div className="cursor-pointer relative" onClick={showCart}>
        <BsCart />
        <span className="absolute text-xs right-0 bottom-0 w-4 bg-red-400 text-white flex  justify-center items-center aspect-square rounded-full ">
          {numberOfCartItems}
        </span>
      </div>
    </header>
  );
};

export default Header;
