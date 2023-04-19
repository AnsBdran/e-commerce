import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = ({}) => {
  const { products } = useRouteLoaderData("root");

  return (
    <main className="">
      <Hero />
      <section className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 px-4  sm:px-12">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
