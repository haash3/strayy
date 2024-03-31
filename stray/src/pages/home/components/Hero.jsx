import React from "react";
import { Button } from "../../../components/Button";

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
          className="tracking-widest text-white 
                    font-robo lg:text-[20px] text-[18px]"
        >
          Our New
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
          Walk to your Own Beat.
        </p>
       <Button label={'Shop Now'} to={'/shop'}/>
      </div>
    </section>
  );
};
