"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove items with quantity 0

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the cart total with additional charges
  const calculateTotal = () => {
    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
    });

    // Apply additional Rs 300 charge if any item is under Rs 150
    cart.forEach(item => {
      if (item.price * item.quantity <= 150) {
        total += 300; // Add Rs 300 charge
      }
    });

    return total;
  };

  const proceedToCheckout = () => {
    // Pass the total value to the checkout page via query parameters or URL
    const total = calculateTotal();
    router.push(`/checkout?total=${total}`);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

