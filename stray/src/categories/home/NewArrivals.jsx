import React from "react";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { Slider } from "../../components/Slider";
import './newArrivals.css'

export const NewArrivals = () => {
  // horizontal scroll effect start
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (window.innerWidth < 600) {
      slider.scrollLeft = slider.scrollLeft - 258;
    } else {
      slider.scrollLeft = slider.scrollLeft - 298;
    }
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (window.innerWidth < 900) {
      slider.scrollLeft = slider.scrollLeft + 258;
    } else {
      slider.scrollLeft = slider.scrollLeft + 298;
    }
  };
  // horizontal scroll effect end.

  return (
    <section className="container">
      <div className="section-head buttons-grid">
        <div> Latest Drops. &nbsp;
          <span>
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
