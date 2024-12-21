"use client";

import { useState } from "react";
import data from "../../../public/data.json";
import Link from "next/link";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const { products } = data;
  const product = products.find((p) => p.id === params.id);

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <p>Items in Cart: {cartCount}</p>
      <Link href='/cart'>View Cart</Link>
    </div>
  );
}
