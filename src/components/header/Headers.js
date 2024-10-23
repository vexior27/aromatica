import { FaShoppingCart } from "react-icons/fa";

import logo from "./logo.png"
export default function Header() {
   return (
      <div className="header md-w-full bg-white flex items-center justify-center h-20 font-amiriRegular border-b border-gray-100 ">
         <div className="header-logo-container w-1/4 flex items-center justify-center h-full p-5">
            <img src={logo} alt="logo" className="h-full cursor-pointer"/>
         </div>
         <div className="header-navigation w-2/4 h-full font-medium uppercase ">
            <ul className="flex w-full h-full items-center justify-around text-lg">
               <li><a href=".">bestsellers</a></li>
               <li><a href=".">mens</a></li>
               <li><a href=".">womens</a></li>
               <li><a href=".">sales</a></li>
               <li><a href=".">latest pickups</a></li>
            </ul>
         </div>
         <div className="header-cart w-1/4 flex items-center justify-center">
            < FaShoppingCart />
         </div>
      </div>
   )
}