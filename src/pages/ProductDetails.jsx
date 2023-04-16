import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { product } = useLoaderData();
  return (
    <main>
      <section>
        <h1 className="text-3xl font-semibold mb-3">{product.title}</h1>
        <p>{product.description}</p>
      </section>
      <section>
        <img src={product.image} alt={product.title} />
      </section>
    </main>
  );
};

export const productDetailsLoader = async ({ params: { id } }) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await res.json();
  return { product };
};

export default ProductDetails;
