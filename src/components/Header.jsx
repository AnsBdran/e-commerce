import { useContext, useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart-context";
import Logo from "../assets/logo.svg";

const Header = () => {
  const { setIsShowing, numberOfCartItems } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  const ifClass = isActive
    ? "fixed bg-white shadow-md  transition-all z-10 "
    : "bg-none";

  const showCart = () => {
    console.log("hi you");
    setIsShowing((prev) => !prev);
  };

  return (
    <header className={ifClass + " " + " fixed w-full text-3xl py-4 px-4 "}>
      <div className="container mx-auto flex justify-between items-center lg:px-32">
        <Link to="/">
          <img src={Logo} alt="store logo" className="w-8" />
        </Link>
        <div className="cursor-pointer relative" onClick={showCart}>
          <BsCart />
          <span className="absolute text-xs right-0 bottom-0 w-4 bg-red-400 text-white flex  justify-center items-center aspect-square rounded-full">
            {numberOfCartItems}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
