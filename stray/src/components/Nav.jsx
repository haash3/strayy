import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, List, XCircle, MagnifyingGlass  } from "@phosphor-icons/react";
import { Logo } from "./Logo";

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

        <div
          className="lg:flex gap-2 p-2 w-[16rem] border border-black
          rounded-full 
                  font-poppins  bg-white
                  text-[0.8rem] items-center hidden"
        ><MagnifyingGlass size={20} /> Search here 
          
        </div>

        <div className="lg:flex gap-4 hidden">
          <Link to="/cart">
            <Heart size={28} weight="fill"
           />
          </Link>

          <Link to="/cart">
            <ShoppingBag size={28} />
          </Link>
        </div>
        {/* small screen */}
        <div className="lg:hidden">
          {isOpen ? (
            <XCircle size={32} onClick={toggleVisibility} />
          ) : (
            <List size={32} onClick={toggleVisibility} />
          )}
        </div>
      </div>

      <div>
        <div
          className={isOpen ? "navMenu active " : "navMenu"}
        >
          <Link to="/new" className="new-arrivals" onClick={closeMenu}>
            New
          </Link>
          <Link to="/shop" className="new-arrivals" onClick={closeMenu}>
            Shop
          </Link>
          <Link to="/deals" className="new-arrivals" onClick={closeMenu}>
            Offers
          </Link>
          <Link to="/accessories" onClick={closeMenu}>
            Accessories
          </Link>
          <Link to="/aboutus" onClick={closeMenu}>
            About us
          </Link>
          <Link to="/cart" onClick={closeMenu} className="colorFill">
            Wishlist
          </Link>
          <Link to="/aboutus" onClick={closeMenu} className="colorFill">
            Cart
          </Link>
        </div>
      </div>
    </>
  );
};
