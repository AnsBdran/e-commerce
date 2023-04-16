import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout, { MainLoader } from "./layouts/MainLayout";
import ProductDetails, { productDetailsLoader } from "./pages/ProductDetails";
import Home from "./pages/Home";
import Error404 from "./pages/404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      loader={MainLoader}
      id="root"
      errorElement={<Error404 />}
    >
      <Route index element={<Home />} />
      <Route
        path="product/:id"
        element={<ProductDetails />}
        loader={productDetailsLoader}
      />
    </Route>
  )
);
