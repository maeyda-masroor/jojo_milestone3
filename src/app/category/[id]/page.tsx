"use client"
import data from "../../../public/data.json";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import CartModal from "../../../components/CartModel";
import { useState } from "react";
import { useWishlist } from "../../context/wishContext";
import Image from "next/image";
import SearchModal from "../../../components/searchModel";

export default function CategoryPage({ params }: { params: { id: string } }) {
const { products } = data;
const filteredProducts = products.filter((product) => product.categoryId === params.id);
const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sortOption, setSortOption] = useState<string>("default");
  const [filterOption, setFilterOption] = useState<string>("all");
  const { addToWishlist } = useWishlist();
  const handleAddToCart = (product:any) => {
    addToCart({ ...product, quantity: 1 });
    setIsCartOpen(true); // Open cart modal when adding an item
  };
  const handleSort = (option: string) => {
    setSortOption(option);
  };

  // Filter handler
  const handleFilter = (option: string) => {
    setFilterOption(option);
  };
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    return 0; // Default order
  });

  // Filtering logic
  const finalProducts = sortedProducts.filter((product) => {
    if (filterOption === "all") return true; // Show all products
    if (filterOption === "in-stock") return product.stock; // In stock only
    if (filterOption === "discount") return product.discount > 0; // Discounted items
    return true;
  });
    return (
      <div className="flex flex-col">
      {/* Sort and Filter Options */}
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {/* Sort Dropdown */}
        <div className="">
        <select
          className="border border-gray-400 rounded p-2"
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
        </div>
        <div className="">
        {/* Filter Dropdown */}
        <select
          className="border border-gray-400 rounded p-2"
          value={filterOption}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="all">Filter By</option>
          <option value="in-stock">In Stock</option>
          <option value="discount">Discounted Items</option>
        </select>
        </div>
      </div>

    <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 lg:pl-0 lg:pr-0 p-4 overflow-x-hidden mx-auto">
    {finalProducts.map((product) => (
    <div className="bg-white text-black gap-2  rounded-lg shadow-lg" key={product.id}>
          <div className="">
          {product.discount > 0 && (
              <p style={{ color: "white" ,backgroundColor:'black' ,borderRadius:'25px',width:'100px',height:'25px',padding:'2px'}}>
                SAVE {product.discount}% 
              </p>
            )}
          </div>
          <Image src={product.image} width={300} height={300} className="rounded-full border-2 border-gray-300 p-4" alt="c"/>
          <div className="p-4">
          <p className="text-3xl text-black">
             <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </p>
          
          <div className="text-2xl">Rs.{product.price}<span className="text-black">{}</span></div>
          <div className="flex">
          <button
                className="bg-gray-400 text-white w-full h-10 mt-2"
                onClick={() => addToWishlist(product)}
              >
                Add to Wishlist
              </button>
          </div>
          {product.stock ? (
          <button className="bg-black text-white w-full h-10" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          ) : (
            <p className="text-red-500 text-lg">Out of Stock</p>
          )}
          </div>

      </div> 
      ))}
    </div>


      {/* Pass isCartOpen to control modal visibility */}
      <CartModal isOpen={isCartOpen} closeModal={() => setIsCartOpen(false)} />
    </div>
    </div>
  );
}
