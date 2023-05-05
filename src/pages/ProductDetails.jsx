import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import { CartContext } from "../contexts/cart-context";

const ProductDetails = () => {
  const { product } = useLoaderData();
  const { addCartItem } = useContext(CartContext);
  return (
    <main className="flex flex-col lg:flex-row gap-24 py-24 px-6 lg:px-24 items-center min-h-[85vh]">
      <section className="p-12 bg-white max-w-[250px] md:max-w-md">
        <img src={product.image} alt={product.title} />
      </section>
      <section className="mt-4">
        <h1 className="text-3xl font-semibold text-center">{product.title}</h1>
        <p className="text-center text-xl text-red-500">$ {product.price}</p>
        <p>{product.description}</p>
        <Button
          className="bg-slate-800 text-slate-50 px-8 mx-auto block mt-3"
          onClick={() => addCartItem(product)}
        >
          Add to cart
        </Button>
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
