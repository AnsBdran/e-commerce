import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout, { MainLoader } from "./layouts/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} loader={MainLoader} id="root">
      <Route index element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
    </Route>
  )
);
