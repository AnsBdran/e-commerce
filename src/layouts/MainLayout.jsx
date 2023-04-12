import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const MainLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { products };
};

export default MainLayout;
