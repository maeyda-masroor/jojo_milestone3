
import Link from "next/link";
import data from "../public/data.json";
import Image from 'next/image';
export default function Categories(){
    const { categories } = data;
    return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 lg:pl-36 lg:pr-36 p-4">
    {categories.map((category) => (
    <div className="bg-white text-black flex gap-2 p-10" key={category.id}>
        <div className="">
            <h1 className="text-4xl font-extrabold" ><Link href={`/category/${category.id}`}>{category.name}</Link></h1>
            <br/>
            <br/>
            <br/>
            <button className="bg-black text-white p-4 rounded-full w-64 h-10">Explore</button>
        </div>
        <div className=""><Image src={category.image}alt="c" width={550} height={200}/></div>
    {/*<ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
       
        </ul>*/}
    </div>
    ))}
  </div>
  
}