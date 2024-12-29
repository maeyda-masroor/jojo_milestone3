"use client";
import React from "react";
import { useWishlist } from "../context/wishContext";
import Image from "next/image";

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <div>
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
