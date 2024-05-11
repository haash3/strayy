import React from 'react'

export const GoalsSection = () => {
    return (
        <section className="padding-x padding-y bg-[#6D8450] mx-8 rounded-[5rem]">
        <div className="goal-section">
          <div>
            <div className="flex flex-col gap-0 leading-[4rem] text-black/80"> 
            <div className="goalsSection-heading font-oswald">Our Mission</div>
            <div className="font-poppins text-[2rem] pl-2 font-semibold ">Redefining style with sustainability in mind.</div>
            </div>
           
            <p className="font-dmsans text-[1.5rem] font-semibold text-left py-2 px-4 text-[#9AAF70]">
            Our mission is to revolutionize the fashion industry by promoting sustainable 
            practices and eco-friendly production methods. We aim to empower individuals to 
            make conscious choices while offering high-quality clothing that aligns with 
            environmental and ethical standards. Through innovation and dedication, we strive to create a 
            positive impact on both people and the planet, fostering a more sustainable and equitable future for generations to come. 
             </p>
          </div>
          <div className="bg-aboutGoal headSection-img  display"></div>

        </div>
      </section>
    )
}
