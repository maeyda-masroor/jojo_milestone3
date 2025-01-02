"use client"
import { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import Link from "next/link";
const Checkout: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();

  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Store total price in localStorage
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    router.push("/placeorder");
  };

  return (
    <div>
      <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="space-y-4">
      <div>
        <div className="flex gap-96">
          <h1 className="text-2xl text-black">Contact us</h1>
          <Link href='/login'>Login</Link>
        </div>
        <input type="text" id="field1" placeholder="Your Email" className="mt-1 p-4 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 "/>
        <br/>
        <label className="flex items-center space-x-2">
        <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
        <span className="text-gray-700">Email me with news and stories</span>
      </label>
      </div>
      <h1 className="Delivery info">Delivery Info</h1>
      <div className="w-full">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Choose a country:</label>
      <select id="country" name="country" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <option value="pakistan">Pakistan</option>
      </select>
      </div>
      <div className="flex">
      <div>
        <label htmlFor="field3" className="block text-sm font-medium text-gray-700">First name</label>
        <input type="text" id="field3" placeholder="Firstname" className="mt-1 block w-1/2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="field4" className="block text-sm font-medium text-gray-700">Field 4</label>
        <input type="text" id="field4" className="mt-1 block w-1/2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      </div>
      <div>
        <label htmlFor="field5" className="block text-sm font-medium text-gray-700">Field 5</label>
        <input type="text" id="field4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      </div>
      <div>
      <h1>Checkout</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout} disabled={cart.items.length === 0}>
        Place Order
      </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Checkout;

