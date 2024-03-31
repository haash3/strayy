import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav 
    className="flex items-center
               justify-between gap-4 px-10 py-2">
      <h4
        className="font-poppins font-bold text-5xl italic"
      >
        stray. </h4>
      <div
        className="flex gap-5 pr-4 font-semibold 
                   font-opensans tracking-wider text-lg"
      >
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>New-Arrivals</Link>
        <Link>Help</Link>
        <Link>Cart</Link>
      </div>
    </nav>
  );
};
