import React from "react";
import msLogo from "../assets/msLogo.png"
import residentPic from "../assets/resident.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons" 

export default function Navbar({ cartList }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              
            >
              <img class="px-28 h-20 w-26" src={msLogo}/>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex  lg:flex-row list-none lg:ml-auto">
        
              <li className="nav-item">
                <a
                  className="px-8 py-8 flex items-center text-sm  font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-8 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="mx-10">Browse</span>
                </a>
                
              </li>
              <li className="nav-item items-center flex">
                <div class="">
                <a
                  className="px-2 rounded-lg p-1 flex items-center text-sm font-bold leading-snug text-pink-600 hover:opacity-75 border-y border-x border-pink-600 relative"
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Cart</span>
                  {cartList > 0 && <span class="absolute bg-pink-600 rounded-md px-1 text-white font-bold" style={{top:"-3px", right:"-10px", fontSize:"12px"}}>{cartList}</span>}
                </a>
                </div>
                
              </li>
            </ul>
          </div>
        </div>
        <img class="object-cover object-top" style={{width:"100vw", height:"400px" }} src={residentPic}/>
      </nav>
    </>
  );
}