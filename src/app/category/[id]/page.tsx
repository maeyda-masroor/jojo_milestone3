import data from "../../../public/data.json";
import Link from "next/link";

export default function CategoryPage({ params }: { params: { id: string } }) {
const { products } = data;
const filteredProducts = products.filter((product) => product.categoryId === params.id);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
