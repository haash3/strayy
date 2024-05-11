import React from "react";
import { CaretDoubleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="padding-x py-[8rem] 
      flex flex-col justify-center
      h-[100vh] hero-img lg:bg-hero bg-MiniHero">
        <div className="padding-x py-[8rem]">
            <div className="font-dmsans text-black/75
                            font-semibold text-[1rem]"
                           >Starting from ₹499
            </div>
            <div className="font-poppins
                            font-semibold lg:text-[3rem] text-[2rem]"
                           >Exclusive collection <br /> for everyone
            </div>
            <div className="font-poppins bg-[#bfa688] w-[11.5rem] p-2 flex
                            items-center gap-2  tracking-wider text-[#2d1d1a]
                            justify-center mt-5
                            font-semibold text-[1rem] rounded-full"
                           >
                            <Link to= "/shop">
                            Explore Now 
                            </Link> <CaretDoubleRight size={28} />
                          
                           {/* link button to products shop */}
            </div>
        </div>
      </div>
    </>
  );
};
