import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

export const Hero = () => {
  return (
    <section
      className="w-full padding-x
                bg-cover h-[90vh]
                lg:bg-hero bg-heroSscreen
                flex flex-col justify-end"
    >
      <div className="leading-tight pb-8">
        <p
          className="font-robo tracking-widest
                    text-white lg:text-[18px] text-[16px]"
        >
          Feel the Unreal
        </p>
        <p
          className="lg:text-[58px] text-[48px] font-bold font-robo
                    uppercase text-white"
        >
          Air Max Dn
        </p>
        <p
          className="tracking-widest text-white 
                    font-robo lg:text-[20px] text-[18px]"
        >
          The next generation of Air technology is here.
        </p>
        <button
          className="bg-white text-black
                    px-4 py-1 my-4 font-robo tracking-wide
                    border border-black lg:text-lg text-md
                    flex gap-2 items-center 
                    shadow-[5px_5px_0px_0px_black] uppercase"
        >
          Shop Now <ArrowRight size={36} />
        </button>
      </div>
    </section>
  );
};
