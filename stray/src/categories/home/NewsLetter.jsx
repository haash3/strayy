import React from "react";
import { Envelope } from "@phosphor-icons/react";

export const NewsLetter = () => {
  return (
    <section
      className="text-center 
                justify-center items-center gap-8 bg-[#000000]
                padding-x w-full pt-10 pb-10 text-[#F9FAFD] "
    >
      <div className="font-poppins">
        <h1 className="font-dmsans text-[32px] font-bold pt-4 pb-2 flex justify-center items-center gap-2">
          Newsletter <Envelope size={42} />
        </h1>
        <p className="text-lg pb-4 text-[#343330de]">
          Unlock early access and enjoy discounted rates with our subscription
        </p>
      </div>
      <form className="py-4">
        <input type="email" placeholder="your@email.com" 
               className="p-2 m-2 w-[250px] text-center
                         border-none outline-none rounded-sm
                         text-black" />
        <button type="submit" 
                className="bg-gray-300 text-black p-2 mx-2 w-[100px] rounded-sm">
          Subscribe
        </button>
      </form>
    </section>
  );
};
