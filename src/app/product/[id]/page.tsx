"use client";

import { useState } from "react";
import data from "../../../public/data.json";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
export default function ProductDetails({ params }: { params: { id: string } }) {
  const { products } = data;
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const handleAddToCart = (product: any) => {
    // Add quantity property before adding to cart
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(productWithQuantity);
  };
  return (
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 lg:pl-56 lg:pr-56 mt-10">
    <div className="p-4 text-white">
    {product?.image && (
    <Image src={product?.image} alt="x" width={400} height={500}/>
    )}
    </div>
    <div className=" p-4 text-white">
      <h1 className="text-6xl text-black">{product?.name}</h1>
      <p className="text-4xl text-black">{product?.description}</p>
      <p className="text-2xl text-black">{product?.vendor_name}</p>
      <p className="text-xl text-black">{product?.quantity}</p>
      <p className="text-sm text-black">Price: ${product?.price}</p>
      <ul className="flex gap-4">
      {product?.flavours.map((product) => (
       <li className="text-xl text-black p-2 border-2 border-black rounded-md">{product}</li>
       
      ))}
      </ul>
      <button className="bg-black text-white w-full h-16 mt-10" onClick={() => handleAddToCart(product)}>Add to Cart</button>
      <Link href='/cart'>View Cart</Link>

    </div>
    </div>
    </div>
  );
}
