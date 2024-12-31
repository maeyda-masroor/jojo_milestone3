"use client"
import { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
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
        <label htmlFor="field1" className="block text-sm font-medium text-gray-700">Field 1</label>
        <input type="text" id="field1" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="field2" className="block text-sm font-medium text-gray-700">Field 2</label>
        <input type="text" id="field2" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="field3" className="block text-sm font-medium text-gray-700">Field 3</label>
        <input type="text" id="field3" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="field4" className="block text-sm font-medium text-gray-700">Field 4</label>
        <input type="text" id="field4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
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

