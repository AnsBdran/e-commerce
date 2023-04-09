import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ProductsProvider } from "./contexts/products-context";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
