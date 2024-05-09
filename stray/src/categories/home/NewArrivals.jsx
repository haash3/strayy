import React from "react";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { Slider } from "../../components/Slider";

export const NewArrivals = () => {
  // horizontal scroll effect start
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (window.innerWidth < 600) {
      slider.scrollLeft = slider.scrollLeft - 320;
    } else {
      slider.scrollLeft = slider.scrollLeft - 320;
    }
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (window.innerWidth < 900) {
      slider.scrollLeft = slider.scrollLeft + 320;
    } else {
      slider.scrollLeft = slider.scrollLeft + 320;
    }
  };
  // horizontal scroll effect end.

  return (
    <section className="padding-x pt-8">
      <div className="text-grid">
      <div className='font-poppins lg:text-[2.25rem] text-[2rem]
            text-pantone font-semibold'>
                Latest Drops. &nbsp;
                <span className='text-gray-500'>
                Stay ahead with New Arrivals
                </span>
            </div>
        {/* buttons */}
        <div className="sliderBtns ">
          <button title="scroll left" onClick={slideLeft}>
            <ArrowLeft size={36} className="btn" />
          </button>
          <button title="scroll right" onClick={slideRight}>
            <ArrowRight size={36} className="btn" />
          </button>
        </div>
      </div>

      <div className="item-container" id="slider">
        <Slider />
      </div>
    </section>
  );
};
