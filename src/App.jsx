import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartProvider, { CartContext } from "./contexts/cart-context";
import Cart from "./components/Cart";
import { useContext } from "react";

// toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const { isShowing } = useContext(CartContext);
  console.log("inside app", isShowing);

  return (
    <div className="relative">
      <RouterProvider router={router} />
      <ToastContainer />
      <Cart />
    </div>
  );
}

export default App;
