"use client"
import React from "react";
import { useCart } from "../app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
const CartModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({ isOpen, closeModal }) => {
    const { cart, removeFromCart, updateCartItem } = useCart(); // Add `updateCartItem` for quantity adjustment

      return (
        <div className={`cart-modal ${isOpen ? "open" : ""}`} onClick={closeModal}>
          <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="bg-yellow text-black p-4" onClick={closeModal}>Close</button>
            <h2>Your Cart</h2>
            {cart.items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.items.map((item) => (
                  <li key={item.id} className=" border-gray-100 border-b-2 mt-10">
                    <div className="">
                      <div className="flex">
                      <Image src={item.image} alt="r" width={50} height={50}/>

                      <h1><span>{item.name}</span>
                      <br/>
                      <h1>${(item.price * item.quantity).toFixed(2)}</h1>
                      </h1>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                      </div>

                      <button className="mt-1" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  
                  </li>

                ))}
              </ul>
            )}
            <p>
              Total: $
              {cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </p>
            <br/>
            <Link className="bg-yellow text-black p-4 mt-10" href='/cart'>View Cart</Link>
          </div>
        </div>
      );
    };
  

export default CartModal;
