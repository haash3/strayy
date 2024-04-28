import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, List, XCircle } from "@phosphor-icons/react";
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
                      padding-x py-4 text-center nav relative"
      >
        <Link to="/">
          {" "}
          <Logo />{" "}
        </Link>

        <div
          className="lg:flex gap-8 pr-4 
                  font-poppins uppercase 
                  text-lg items-center hidden"
        >
          <Link to="/new">New</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/deals">Offers</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/aboutus" onClick={closeMenu}>
            About us
          </Link>
        </div>

        <div className="lg:flex gap-4 hidden">
          <Link to="/cart">
            <Heart size={28} />
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
          <Link to="/cart" onClick={closeMenu}>
            Wishlist
          </Link>
          <Link to="/aboutus" onClick={closeMenu}>
            Cart
          </Link>
        </div>
      </div>
    </>
  );
};
