"use client"
import React from "react";
import { useCart } from "../app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
const CartModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({ isOpen, closeModal }) => {
    const { cart, removeFromCart, updateCartItem } = useCart(); // Add `updateCartItem` for quantity adjustment

      return (
        <div className={`cart-modal ${isOpen ? "open" : ""}`} onClick={closeModal}>
          <button className="cart-close-btn" onClick={closeModal}>X</button>
          <div className="cart-modal-content " onClick={(e) => e.stopPropagation()}>
            <br/>
            <br/>
            <h2>Your Cart</h2>
            {cart.items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.items.map((item) => (
                  <li key={item.id} className=" border-gray-100 h-auto border-b-2 mt-10">
                      <div className="flex relative group">
                      <Image src={item.image} alt="r" width={150} height={150}/>
                      <button className="absolute top-4 left-4  bg-black text-white py-2 px-4 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"onClick={() => removeFromCart(item.id)}>X</button>
                      <h1><span>{item.name}</span>
                      <br/>
                      <h1>${(item.price * item.quantity).toFixed(2)}</h1>
                      </h1>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" ,paddingLeft:"10px"}}>
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                      </div>
                  </li>
                 
                ))}
              </ul>
            )}
            <div className="flex gap-64">
              <div>Total</div>
              <div>${cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</div>
            </div>
            <br/>
            <Link className="bg-yellow text-black p-4 mt-20" href='/cart'>View Cart</Link>
          </div>
        </div>
      );
    };
  

export default CartModal;
