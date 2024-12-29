import Image from "next/image";
import EMAIL from '../public/uil_envelope-alt.png';
import PHONE from '../public/bx_bx-phone-call.png';
import CART from '../public/fluent_cart-24-regular.png';
import HEART from '../public/uil_heart-alt.png';
import Profile from '../public/user.png';
import Link from "next/link";
export default function TopHeader() {
  return (
    <header className="w-full bg-yellow text-black lg:pl-56 lg:pr-56 overflow-x-hidden mx-auto">
      <div className=" grid 
          grid-cols-1 gap-10
          lg:grid-cols-2 lg:gap-8">
        {/* First div with two items inline */}
       <div className="flex">
        {/* Second List or content (can be anything else) */}
        <ul className="flex gap-7">
          <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.941v5.665H9.352V9h3.414v1.561h.049c.477-.9 1.637-1.852 3.37-1.852 3.6 0 4.268 2.369 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zm-1.778 13.019h3.555V9H3.559v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.21 24 24 23.226 24 22.271V1.729C24 .774 23.21 0 22.225 0z"/>
        </svg>

           </li>
          <li className="py-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000000" width="24" height="24">
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f58529" />
            <stop offset="50%" stop-color="#dd2a7b" />
            <stop offset="100%" stop-color="#8134af" />
          </linearGradient>
          <path fill="url(#grad)" d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.957.24 2.415.404a4.92 4.92 0 0 1 1.675.973 4.92 4.92 0 0 1 .973 1.675c.163.458.35 1.246.404 2.415.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.957-.404 2.415a4.92 4.92 0 0 1-.973 1.675 4.92 4.92 0 0 1-1.675.973c-.458.163-1.246.35-2.415.404-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.957-.24-2.415-.404a4.92 4.92 0 0 1-1.675-.973 4.92 4.92 0 0 1-.973-1.675c-.163-.458-.35-1.246-.404-2.415-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.054-1.17.24-1.957.404-2.415a4.92 4.92 0 0 1 .973-1.675 4.92 4.92 0 0 1 1.675-.973c.458-.163 1.246-.35 2.415-.404 1.265-.058 1.645-.07 4.849-.07zm0 1.686c-3.14 0-3.508.012-4.738.068-.993.045-1.528.213-1.877.354-.473.182-.812.4-1.17.757-.357.357-.576.697-.757 1.17-.141.349-.31.884-.354 1.877-.056 1.23-.068 1.598-.068 4.738s.012 3.508.068 4.738c.045.993.213 1.528.354 1.877.182.473.4.812.757 1.17.357.357.697.576 1.17.757.349.141.884.31 1.877.354 1.23.056 1.598.068 4.738.068s3.508-.012 4.738-.068c.993-.045 1.528-.213 1.877-.354.473-.182.812-.4 1.17-.757.357-.357.576-.697.757-1.17.141-.349.31-.884.354-1.877.056-1.23.068-1.598.068-4.738s-.012-3.508-.068-4.738c-.045-.993-.213-1.528-.354-1.877-.182-.473-.4-.812-.757-1.17-.357-.357-.697-.576-1.17-.757-.349-.141-.884-.31-1.877-.354-1.23-.056-1.598-.068-4.738-.068zm0 3.084c2.412 0 4.366 1.954 4.366 4.366S14.412 15.666 12 15.666 7.634 13.712 7.634 11.3 9.588 6.934 12 6.934zm0 1.686c-1.482 0-2.68 1.198-2.68 2.68s1.198 2.68 2.68 2.68 2.68-1.198 2.68-2.68-1.198-2.68-2.68-2.68zm6.406-3.31a1.02 1.02 0 1 1 0 2.04 1.02 1.02 0 0 1 0-2.04z"/>
        </svg>

          </li>
          <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000000" width="24" height="24">
            <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.991 4.388 10.953 10.125 11.854v-8.385H7.078v-3.469h3.047V9.797c0-3.019 1.793-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.875v2.25h3.328l-.531 3.469h-2.797v8.385C19.612 22.953 24 17.991 24 12z"/>
          </svg>

          </li>
        </ul>
      </div>
      <div className="flex">
        {/* Second List or content (can be anything else) */}
        <div className="flex">
          <ul className="flex gap-5">
          <li className="py-2 flex items-center">
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
            <path d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v.511l-8 5.333L4 6.511V6h16zm0 2.489v9.511H4v-9.511l8 5.333 8-5.333z"/>
          </svg>
          </span>info@jojo.com.pk
                    </li>
          <li className="py-2 flex items-center">
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
          <path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A18 18 0 0 1 3 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.31 2.2z"/>
        </svg>
        </span>(051)7777123(jojo)56666  
                  </li>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
}