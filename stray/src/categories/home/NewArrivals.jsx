import React from 'react'
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { Slider } from '../../components/Slider'

export const NewArrivals = () => {
  // horizontal scroll effect start
  const slideLeft = ()=>{
    let slider = document.getElementById("slider");
    if (window.innerWidth<600) {
    slider.scrollLeft = slider.scrollLeft - 205;
      
    } else {
    slider.scrollLeft = slider.scrollLeft - 1355;
    }
  }
  const slideRight = ()=>{
    let slider = document.getElementById("slider");
    if (window.innerWidth<600) {
      slider.scrollLeft = slider.scrollLeft + 205;
        
      } else {
      slider.scrollLeft = slider.scrollLeft + 1355;
      }
  }
  // horizontal scroll effect end.
 
  return (
    <>
    hello
    </>
    // <section className="padding-x padding-y">
    //   <div className='btns'>
    //   <div className="font-poppins text-[32px] ">
    //     New Arrivals 
    //   </div>
    //   {/* buttons */}
    //   <div className='btns'>
    //     <button title='scroll left'  onClick={slideLeft}>
    //       <ArrowLeft size={30} className='btn' />
    //     </button>
    //     <button title='scroll right' onClick={slideRight}>
    //       <ArrowRight size={30} className='btn' />
    //     </button>
    //   </div>
    //   </div>
     
    //   <div  className="row-container" id="slider">
    //   <Slider />
    //   </div>
      
    // </section>
  )
}
