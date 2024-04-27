import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export const Hero = () => {
  return (
    <>
      <div className="h-[100vh]  padding-x py-8">
        <div className="lg:flex gap-6 h-[90vh] hidden">
          {/* first row */}
          <div className="w-[350px] flex flex-col gap-4 font-poppins">
            <div className=" h-[40vh] hero-img bg-heroImg1-1 flex items-center">
              <div className="vertical-text">#Men Polo T-shirt </div>
            </div>
            <div className=" h-[40vh] hero-img bg-heroImg1-2 flex items-center">
              <div className="vertical-text">#Women Cardigan </div>
            </div>
            <div
              className=" h-[25vh] bg-[#4B4239] rounded-[40px] flex
                             justify-between p-5  flex-col"
            >
              <div className="ml-64 arrow ">
                <ArrowUpRight size={32} />
              </div>
              <div
                className="text-left font-poppins
                             text-[25px] px-6 py-3 text-white"
              >
                Korean Bags
              </div>
            </div>
          </div>
          {/* first row end */}

          {/* 2row */}
          <div className="w-[570px] hero-img bg-heroImg2"></div>
          {/* 2row  end*/}
          {/* 3row */}
          <div className=" w-[450px] flex flex-col gap-4">
            <div className="bg-[#4B4239] h-[8vh] rounded-[50px] flex justify-between items-center ">
              <div className=" text-white font-poppins text-2xl py-3 px-4">
                Shop now
              </div>
              <div className=" bg-white rounded-[50px] p-1 mr-2">
                <ArrowUpRight size={32} />
              </div>
            </div>
            <div className="h-[80vh] bg-heroImg3 hero-img relative flex justify-center items-end"></div>
          </div>
          {/* 3row */}
        </div>

        <div className="lg:hidden h-[90vh] bg-heroImg2 hero-small-screen flex items-end justify-center">
          <div className="w-[300px] h-[70px] round flex justify-center items-center">
            <div className="btn-small-screen w-[275px]">
              <p className="text-white">Shop Now</p>
              <div className="bg-white rounded-[50px] ">
                <ArrowUpRight size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
