"use client";

import { useState } from "react";
import data from "../../../public/data.json";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

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
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      <Link href='/cart'>View Cart</Link>
    </div>
  );
}
