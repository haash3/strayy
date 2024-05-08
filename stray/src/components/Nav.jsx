import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, List, XCircle, MagnifyingGlass  } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import {SearchButton} from "./SearchButton"

// Main-Code
// bg-[#B9A698]
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className=" flex items-center justify-between 
                      padding-x py-4 text-center nav
"
      >
        <Link to="/">
         <Logo />
        </Link>

        <div  className="lg:flex gap-2 justify-between p-2 w-[16rem] border border-black
                        rounded-full font-poppins  bg-white
                        text-[0.8rem] items-center hidden">
          <SearchButton />
        <MagnifyingGlass size={20} />
          
        </div>

        <div className="flex gap-4">
          <Link to="/cart">
            <Heart size={28} weight="fill"
           />
          </Link>

          <Link to="/cart">
            <ShoppingBag size={28} />
          </Link>
        </div>
       
      </div>
    </>
  );
};
