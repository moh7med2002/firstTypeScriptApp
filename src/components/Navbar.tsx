import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [change,setChange] = useState(false)
    return(
        <div className=" bg-colors-whit">
    <nav className="flex items-center justify-between flex-wrap  py-6 container mx-auto">
   <div className="flex items-center flex-shrink-0 text-white mr-6"> 
    <span className="font-semibold  tracking-tight text-black text-2xl"> Travel.</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2  rounded  border-2 border-black"
    onClick={()=>setChange(back=>!back)}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${!change?"hidden":"block"} justify-end duration-300`}>
    <div className={`text-sm lg:flex-grow}`}>
      <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0   font-semibold mr-4 text-base duration-300 hover:text-main_hover">
        Home
      </Link>
      <Link to={"/about"} className="block mt-4 lg:inline-block lg:mt-0  font-semibold mr-4 text-base duration-300 hover:text-main_hover">
        About
      </Link>
      <Link to={"/packages"} className="block mt-4 lg:inline-block lg:mt-0  font-semibold mr-4 text-base duration-300 hover:text-main_hover">
        Packages
      </Link>
      <Link to={"bookNow"} className="block mt-4 lg:inline-block lg:mt-0  font-semibold mr-4 text-base duration-300 hover:text-main_hover">
        Book
      </Link>
    </div>
    <div>
    </div>
  </div>
</nav>
</div>
    )
}