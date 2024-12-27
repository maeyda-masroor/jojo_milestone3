
import Link from "next/link";
import data from "../public/data.json";
import Image from 'next/image';
export default function Categories(){
    const { categories } = data;
    return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 lg:pl-36 lg:pr-36 p-4 overflow-x-hidden mx-auto">
    {categories.map((category) => (
    <div className="bg-white text-black gap-2  rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2" key={category.id}>
        <div className="p-4">
            <h1 className="text-2xl font-extrabold" ><Link href={`/category/${category.id}`}>{category.name}</Link></h1>
            <br/>
            <br/>
            <br/>
            <button className="bg-black text-white p-4 rounded-full w-32 h-12">Explore</button>
        </div>
        <div className=""><Image src={category.image} alt="c" width={500}
        height={500}
     className=""/></div>
     </div>
    ))}
  </div>
  
}