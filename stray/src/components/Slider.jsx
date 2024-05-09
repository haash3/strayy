import React from "react";
// import { useState } from "react";
import { newItems } from "./AllData";
import { Plus } from "@phosphor-icons/react"

// import { Link } from "react-router-dom";

export const Slider = () => {
    
    
  return (
    <>
    
   
      {newItems.map((item) => {
        return (
          <div className="item" key={item.name}>
            
            <div className="sm:w-[20rem] w-[12rem] relative">
              <img src={item.img} />
            </div>
            <div className="px-2 py-4">
              <p className="priceEffect font-robo">₹{item.price}</p>
              <p className="mb-2 font-dmsans font-semibold">{item.name}</p>
              {/* <p className="text-black/45 font-dmsans">{item.category}</p> */}
            </div>
           
            
          </div>
        );
      })}
    </>
  );
};
