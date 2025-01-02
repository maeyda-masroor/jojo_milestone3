"use client";
import { useCart } from "../context/CartContext";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const WishlistPage: React.FC = () => {
const router = useRouter();
  const { cart, removeFromCart, updateCartItem } = useCart(); // Add `updateCartItem` for quantity adjustment
  // Calculate the cart total with additional charges
  const [isFormVisible, setFormVisible] = useState(false);
  const calculateTotal = () => {
    let total = 0;

    cart.items.forEach(item => {
      total += item.price * item.quantity;
    });

    // Apply additional Rs 300 charge if any item is under Rs 150
    cart.items.forEach(item => {
      if (item.price * item.quantity <= 150) {
        total += 300; // Add Rs 300 charge
      }
    });

    return total;
  };
  return (
    <div className="">
      <h1 className="text-4xl text-black lg:pr-56 lg:pl-56">Product</h1>
      
      <div className="grid gap-4 h-auto md:grid-cols-[60%_40%] grid-cols-1 lg:pl-56 lg:pr-56 mt-10">
      <div className="p-4 flex flex-col gap-4">
      {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
      ) : (
        <div>
        {cart.items.map((item:any) => (
          <div className="border-2 border-gray-300 p-4 mt-10" key={item.id}>
        
          {/* Small top div inside the 60% div */}
          <div className="bg-black text-white  w-10 h-10 text-xl p-[5px]">
          <button className="mt-1" onClick={() => removeFromCart(item.id)}>X</button>
          </div>

        {/* Two Divs inside the 60% */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="lex-1 p-4">
            <Image src={item.image} alt="x" width={80} height={100} />
          </div>
          <div className="flex-1 p-4">
          <h1 className="text-3xl text-black"><span>{item.name}</span></h1>
          <h1 className="text-3xl text-black"><span>Rs.{item.price}</span></h1>
          <h1 className="text-3xl text-black">${(item.price * item.quantity).toFixed(2)}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <button
                           className="border-2 border-gray-300"
                           onClick={() => updateCartItem(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="border-2 border-gray-300">{item.quantity}</span>
                        <button className="border-2 border-gray-300" onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                      </div>
           </div>
        </div>
      </div>
      ))}
      </div>
      )}
      </div>
      <div className="p-4">
        <div><h1>Order Summary</h1>
        <br/>
        <h1>{calculateTotal()}</h1>
        <br/>
        <button
        onClick={() => setFormVisible(!isFormVisible)}
        className="px-4 py-2 bg-black text-yellow rounded hover:bg-blue-600 transition w-full h-10"
      >
        {isFormVisible ? "Note done?" : "Add A Note on Order"}
      </button>
      <form
        className={`mt-4 p-4 border rounded  ${
          isFormVisible ? "block" : "hidden"
        }`}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Special Instruction for seller
          </label>
          <textarea
            id="name"
            rows={5}
            cols={2}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2  text-white rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
        <h1>Free Shipping for order above RS 1500
        <span>Shipping, taxes, and discounts will be calculated at checkout.</span></h1>
      </form>
        <Link href='/checkout'><button className="w-full h-10 text-yellow bg-black rounded-md mt-10">Proceed to check out</button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WishlistPage
