import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import Product from "../components/Product";

const Home = ({}) => {
  const { products } = useRouteLoaderData("root");

  return (
    <main>
      <section className="flex flex-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
