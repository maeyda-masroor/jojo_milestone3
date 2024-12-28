"use client"
import { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

const PlaceOrder: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();

  // Form data state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const storedTotalPrice = localStorage.getItem("totalPrice");
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);
  // On form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the name and location are provided
    if (name && location) {
      router.push(`/order-summary?name=${name}&location=${location}&total=${totalPrice}`);
    } else {
      alert("Please provide your name and location.");
    }
  };
  return (
    <div>
      <h1>Place Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;
