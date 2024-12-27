import Image from "next/image";
import headerimage from '../public/11111.webp';
export default function Header(){

    return <div className="mx-auto overflow-x-hidden"><Image src={headerimage} alt="x"/></div>
}