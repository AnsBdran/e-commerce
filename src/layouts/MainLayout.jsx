import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'

const MainLayout = () => {
  const {products} = useLoaderData()
  console.log("products are" , products)
  return (
    <>
      <Header/>
        <Outlet products={products}/>
      <Footer/>
    </>
  )
}

export const MainLoader = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

 return {products: data}
}

export default MainLayout