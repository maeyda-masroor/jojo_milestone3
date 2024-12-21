import Image from "next/image";
import EMAIL from '../public/uil_envelope-alt.png';
import PHONE from '../public/bx_bx-phone-call.png';
import CART from '../public/fluent_cart-24-regular.png';
import HEART from '../public/uil_heart-alt.png';
import Profile from '../public/user.png';
import Link from "next/link";
export default function TopHeader() {
  return (
    <header className="w-full bg-yellow-300 text-black lg:pl-56 lg:pr-56">
      <div className=" grid 
          grid-cols-1 gap-4
          lg:grid-cols-2 lg:gap-8">
        {/* First div with two items inline */}
       <div className="flex">
        {/* Second List or content (can be anything else) */}
        <ul className="flex gap-7">
          <li className="flex items-center">
           Li
           </li>
          <li className="py-2 flex items-center">
          In
          </li>
          <li className="flex items-center">
            F
          </li>
        </ul>
      </div>
      <div className="flex">
        {/* Second List or content (can be anything else) */}
        <div className="flex gap-7">
          <ul className="flex">
          <li className="py-2 flex items-center">
            info@jojo.com.pk
          </li>
          <li className="py-2 flex items-center">
          (051)7777123(jojo)56666  
          </li>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
}