import Image from "next/image";
import Jojo from '../public/jojo.png';
import Mable from '../public/mabel.png';
import A from '../public/worlds.png';
export default function Sponser(){

    return  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mt-20  lg:pr-10 lg:pl-10 sm:pl-5  sm:mx-auto md:mx-auto text-center">
       <div><Image src={Jojo} alt="c" width={300} height={300}/></div>
       <div> <Image src={Mable} alt="c" width={300} height={300}/></div>
        <div><Image src={A} alt="c" width={300} height={300}/></div>
    </div>
    </div>

}