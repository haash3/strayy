import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Storefront, ShoppingBag, MagnifyingGlass } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { SearchButton } from "./SearchButton"
import '../index.css'

// Main-Code
// bg-[#B9A698]
export const Nav = () => {

  return (
    <nav className="navbar">
      <div className="container nav">
        <Link to="/" className="link"><Logo /></Link>

          <div className="search-bar">
            <SearchButton />  
            <MagnifyingGlass size={20}/>
            
          </div>


        <div className="nav-links">

          <Link to="/shop" className="nav-text hover link">
            <Storefront size={26} />
            <p>Shop</p>

          </Link>
          
          <Link to="/cart" className="nav-text cart hover link">
            <ShoppingBag size={28}/>
            <p>Cart</p>

          </Link>
        </div>

      </div>
    </nav>
  );
};
