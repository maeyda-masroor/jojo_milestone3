import data from "../../../public/data.json";
import Link from "next/link";
import Image from "next/image";
export default function CategoryPage({ params }: { params: { id: string } }) {
const { products } = data;
const filteredProducts = products.filter((product) => product.categoryId === params.id);

  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 lg:pl-0 lg:pr-0 p-4 overflow-x-hidden mx-auto">
    {filteredProducts.map((product) => (
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
       </div>
    </div> 
    ))}
    </div>
  </div>
  );
}
