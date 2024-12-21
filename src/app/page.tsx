
import Link from "next/link";
import data from "../public/data.json";
import Image from 'next/image';
import Header from '../components/Header';
import Categories from "@/components/Categories";
export default function CategoriesPage() {
  const { categories } = data;
  const imageUrl = 'https://res.cloudinary.com/di1kessdw/image/upload/1.webp';
  return (
    <div>
      <Header/>
      <Categories/>
    <div>
      <h1>Categories</h1>
      <Image
        src={imageUrl}
        alt="Cloudinary Example"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
