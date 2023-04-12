import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartProvider, { CartContext } from "./contexts/cart-context";
import Cart from "./components/Cart";
import { useContext } from "react";

function App() {
  const { isShowing } = useContext(CartContext);
  console.log("inside app", isShowing);

  return (
    <div className="relative">
      <RouterProvider router={router} />
      <Cart />
    </div>
  );
}

export default App;
