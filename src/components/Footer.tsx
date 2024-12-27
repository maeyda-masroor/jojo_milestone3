import Image from "next/image";
import Logo from '../public/jojo.png';
import Link from "next/link";
export default function Footer(){
    return (
        <div className="mx-auto overflow-x-hidden text-center">
            <center><Image src={Logo} alt="x" width={300} height={300}/></center>
            <br/>
            <h1 className="font-bold text-2xl">Discover The World Of Treats</h1>
            <h1 className="font-bold text-xl">+92-42-111-11-(JoJo)5656</h1>
            <h1 className="font-bold text-xl">info@jojo.com.pk</h1>
            <div className="flex justify-center gap-7">
                <h1 className="text-black">F</h1>
                <h1 className="text-black">iN</h1>
                <h1 className="text-black">F</h1>
            </div>
            <div className="flex justify-center gap-7">
                
                <Link href='/faq'>Contactus</Link>
                <Link href='/contact'>Faq</Link>
                
            </div>
        </div>
    )
}