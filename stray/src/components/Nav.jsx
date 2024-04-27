import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, List } from "@phosphor-icons/react";
import { Logo } from "./Logo";

// Main-Code
// bg-[#B9A698]
export const Nav = () => {
  return (
    <div
      className=" flex items-center justify-between
                      padding-x py-4 text-center nav"
    >
      <Link to="/"> <Logo /> </Link>

      <div
        className="lg:flex gap-8 pr-4 
                  font-robo uppercase
                  tracking-tight text-lg items-center hidden"
      >
        <Link to="/new" className="new-arrivals">
          New
        </Link>
        <Link to="/shop" className="new-arrivals">
          Shop
        </Link>
        <Link to="/deals" className="new-arrivals">
          Offers
        </Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/aboutus">About us</Link>
      </div>

      <div className="lg:flex gap-4 hidden">
        <Link to="/cart">
          <Heart size={28} />
        </Link>

        <Link to="/cart">
          <ShoppingBag size={28} />
        </Link>
      </div>
      <div className="lg:hidden">
        <List size={32} />
      </div>
    </div>
  );
};
