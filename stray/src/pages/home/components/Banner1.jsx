import React from "react";
import { Button } from "../../../components/Button";

export const Banner1 = () => {
  return (
    <section
      className="w-full padding-x
                bg-cover h-[90vh] 
                lg:bg-banner1 bg-banner1Ss
                flex flex-col justify-end hover:backdrop:blur-sm"
    >
      <div className="leading-tight pb-8
                      ">
        <p
          className="tracking-widest text-white 
                    font-robo lg:text-[20px] text-[18px]
                     py-1"
        >
        Step Into Action:
        </p>
        <p
          className="lg:text-[38px] text-[32px] font-bold font-robo
                    uppercase text-white"
        >
        Explore Our Latest <br/>Sport Shoes
        </p>
        <p
          className="tracking-widest text-white 
                    font-robo lg:text-[18px] text-[18px]
                    bg-black py-1 px-2 w-max"
        >
          Lightweight, flexible, trendy - for athletes & adventurers.
        </p>
       <Button label={'Shop Now'} to={'/shop'}/>
      </div>
    </section>
  );
};
