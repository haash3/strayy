import React from "react";
import { CapItems } from "../../components/AllData";
import { Plus } from "@phosphor-icons/react";

export const CapCollections = () => {
  return (
    <>
      <div className="padding-x py-[4rem]">
        <div
          className="font-poppins lg:text-[2.25rem] text-[2rem]
                                text-pantone font-semibold"
        >
          Cap Collections. &nbsp;
          <span className="text-gray-500">Top it off with style</span>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-5">
          {CapItems.map((item) => (
            <div key={item.id} className="cap-item">
              <div className="relative">
                <img src={item.img} className="filter" />
              </div>
              <div className="px-4">
                <div>
                  <p className="font-poppins font-semibold text-[0.9rem]">
                    {item.name}
                  </p>
                  <p className="font-robo">₹{item.price}</p>
                </div>
                <div> 
                <button className="cart-btn">
                  ShopNow
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
