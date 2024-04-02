import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "@phosphor-icons/react";

// Main-Code
export const Nav = () => {
  return (
    <nav
      className="flex items-center
               justify-between padding-x py-2"
    >
      <Link
        className="font-poppins font-extrabold
                   text-4xl italic"
        to="/"
      >
        stray.
      </Link>
      <div
        className="flex gap-8 pr-4 
                  font-robo uppercase
                  tracking-tight text-lg items-center"
      >
        <Link to="/new" className="new-arrivals">New</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="flex gap-1">Cart<ShoppingBag size={28} /></Link>
      </div>
    </nav>
  );
};
