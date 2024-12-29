"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '../public/logo.png';
import { useCart } from "../app/context/CartContext";
import SearchModal from "../components/searchModel";

import { useWishlist } from "@/app/context/wishContext";
const Navbar: React.FC = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistItems = wishlist.length;
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearchModal = () => {
    setIsSearchOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchOpen(false);
  };
  return (
    <nav>
      <div className="container mx-auto px-4 py-3 grid grid-cols-1 lg:grid-cols-2 items-center lg:pr-36 lg:pl-36">
        {/* Logo Section */}
        <div className="flex items-center justify-center lg:justify-start">
          <Link href="/">
            <Image src={Logo} alt="c" width={100} height={50}/>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-end gap-4 mt-3 lg:mt-0">
          <Link href="/wishlist"><div className="relative w-10 h-10 flex items-center justify-center">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>

          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            ({totalWishlistItems})
          </span>
        </div></Link>

          <Link href="/checkout"><div className="relative w-10 h-10 flex items-center justify-center">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
          <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.938 6l-.938-4H2V2h4.307l1.689 7.455L5.509 12H19v-2H7.938zM6.062 14H19v2H6.062l-.969-4H2v-2h3.061L6.062 14z"/>
        </svg>

          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            ({totalItems})
          </span>
        </div>
       </Link>
      </div>

      {/* Place the SearchModal here */}
     
      </div>
    </nav>
  );
}

export default Navbar;