import React from "react";
import { Button } from "../../components/Button";
import { ArrowUpRight } from "@phosphor-icons/react";


export const Hero = () => {
  return (
    <>
    <div className="h-[100vh]  padding-x py-8">
      <div className="flex gap-6 h-[90vh]">
        {/* first row */}
        <div className="w-[350px] flex flex-col gap-4">
            <div className="bg-black/20 h-[40vh] hero-img bg-heroImg1-1"></div>
            <div className=" h-[40vh] bg-heroImg1-2 hero-img"></div>
            <div className="bg-black/10 h-[20vh]"></div>
        </div>
        {/* first row end */}


        {/* 2row */}
        <div className="w-[570px] hero-img bg-heroImg2"></div>
        {/* 2row  end*/}
        {/* 3row */}
        <div className=" w-[450px] flex flex-col gap-4">
          <div className="bg-[#4B4239] h-[8vh] rounded-[50px] flex justify-between items-center ">
            <div className=" text-white font-poppins text-2xl py-3 px-4">Shop now</div>
            <div className=" bg-white rounded-[50px] p-1 mr-2 border border-white"> <ArrowUpRight size={32} /></div>
          </div>
          <div className="h-[80vh] bg-heroImg3 hero-img relative flex justify-center items-end"></div>
        </div>
        {/* 3row */}

        

      </div>

    </div>
    </>
      
  );
};
