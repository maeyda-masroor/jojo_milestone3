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
  );
};

export default Checkout;

