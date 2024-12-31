"use client";
import React from "react";
import { useWishlist } from "../context/wishContext";
import Image from "next/image";
import Link from "next/link";
const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <div className="container mx-auto p-4">
      {/* For large screens (table) */}
      
      <div className="hidden lg:block">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Product</th>
              <th className="border px-4 py-2 text-left">Price</th>
              <th className="border px-4 py-2 text-left">Remove</th>
              <th className="border px-4 py-2 text-left">Option-Purchase</th>
            </tr>
          </thead>
          {wishlist.map((item) => (
          <tbody>
            <tr>
              <td className="border px-4 py-2"><Image src={item.image} alt="c" width={50} height={50}/></td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2"><button
                className="px-2 py-1"
                onClick={() => removeFromWishlist(item.id)}
              >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24" height="24"
              >
              <path d="M3 6h18"></path>
              <path d="M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14"></path>
            </svg>

              </button></td>
              <td className="border px-4 py-2"><Link href={`/product/${item.id}`}><button className="w-full bg-black text-white">Option</button></Link></td>
            </tr>
          </tbody>
          ))}
        </table>
      )}
      </div>
      {/* For small screens (divs in column) */}
    </div>

    <div>
      <div className="grid grid-cols-1 gap-4 lg:hidden">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlist.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <div>
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p><Link href={`/product/${item.id}`}><button className="w-full bg-black text-white">Option</button></Link></p>
              </div>
              <button
                className=" text-white px-2 py-1"
                onClick={() => removeFromWishlist(item.id)}
              >
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24" height="24"
              >
              <path d="M3 6h18"></path>
              <path d="M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14"></path>
            </svg>
            </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default WishlistPage;
