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
    <section className="padding-x padding-y">
      <div className="text-grid">
        <div className="font-poppins text-[2.5rem] tracking-wide">New Arrivals </div>
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
