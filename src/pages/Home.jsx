import React from "react";
import { useRouteLoaderData } from "react-router-dom";

const Home = ({}) => {
  const { products } = useRouteLoaderData("root");

  return <main>hhh</main>;
};

export default Home;
