"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OrderSummary: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  // Fetch data from query params
  useEffect(() => {
    if (searchParams) {
    const name = searchParams.get("name");
    const location = searchParams.get("location");
    const total = searchParams.get("total");
    setName(name || "");
    setLocation(location || "");
    setTotalPrice(parseFloat(total || "0"));

    // Geocode location to coordinates (you can replace this with a geocoding API)
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Order Summary</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
