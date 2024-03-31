import React from "react";
import { Link } from "react-router-dom";
// import { Cart } from '@phosphor-icons/react';
import { ShoppingBag } from "@phosphor-icons/react";


// Main-Code
export const Nav = () => {
  return (
    <nav 
    className="flex items-center
               justify-between padding-x py-2">
      <h4
        className="font-poppins font-bold text-4xl italic"
      >
        stray. </h4>
      <div
        className="flex gap-8 pr-4 
                  font-robo uppercase
                  tracking-tight text-lg items-center"
      >
        <Link>Shop</Link>
        <Link className="new-arrivals">New</Link>
        <Link>Help</Link>
        <Link
         className="flex gap-1">
          Cart<ShoppingBag size={28} />
        </Link>
      </div>
    </nav>
  );
};
