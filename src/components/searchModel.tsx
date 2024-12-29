import React, { useState } from "react";
import data from "../public/data.json";
import Image from "next/image";

const SearchModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({
  isOpen,
  closeModal,
}) => {
  const { products } = data;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className={`search-modal ${isOpen ? "open" : ""}`} onClick={closeModal}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Search Products</h2>
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} className="flex items-center gap-4 mt-4">
              <Image src={product.image} alt={product.name} width={50} height={50} />
              <div>
                <p>{product.name}</p>
                <p>Rs.{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={closeModal} className="bg-black text-white px-4 py-2 mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
