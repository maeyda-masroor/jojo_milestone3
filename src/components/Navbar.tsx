"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '../public/logo.png';
export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

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
          <Link href="/login">
          Login
          </Link>
          <Link href="/wishlist">
           Wishlist
          </Link>
          <Link href="/cart">Cart ({cartCount})</Link>
      </div>
      </div>
    </nav>
  );
}
