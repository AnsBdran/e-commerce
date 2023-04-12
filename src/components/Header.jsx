import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart-context";

const Header = () => {
  const { setIsShowing } = useContext(CartContext);

  const showCart = () => {
    console.log("hi you");
    setIsShowing((prev) => !prev);
  };

  return (
    <header className="flex justify-between text-3xl py-2 px-4">
      <Link to="/">
        <span>Store</span>
      </Link>
      <div className="cursor-pointer bg-red-400" onClick={showCart}>
        <BsCart />
      </div>
    </header>
  );
};

export default Header;
