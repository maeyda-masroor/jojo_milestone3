"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams(); // Access URL parameters
  const total = searchParams.get("total"); // Get the total passed from the cart

  return (
    <div>
      <h1>Checkout</h1>
      <p>Your total is: Rs {total}</p>
      <button>Proceed to Payment</button>
    </div>
  );
}
