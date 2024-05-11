import React from "react";
import { Link } from "react-router-dom";
import {
  Planet,
  GlobeHemisphereWest,
  ArrowUpRight,
} from "@phosphor-icons/react";

export const AboutUsSection = () => {
  return (
    <>
      <div className="padding-x py-[4rem] display">
        <div
          className="font-poppins lg:text-[2.25rem] text-[2rem]
                                text-pantone font-semibold"
        >
          About Us. &nbsp;
          <span className="text-gray-500">Join Our Purpose</span>
        </div>
        <div className="about-us ">
          <div className="bg-aboutGrid relative img-grid rounded-[50px]">
            <Link to="/about">
              <div className="learn-more-btn uppercase">
                <p className="font-dmsans">Learn More </p>
                <ArrowUpRight size={22} />
              </div>
            </Link>
          </div>
          <div className="aboutUs-text-grid rounded-[50px]">
            <div
              className="font-oswald text-[4rem] font-bold 
                           tracking-wider leading-[6rem] uppercase"
            >
              We're Changing the way things get made.
            </div>
            <div className="aboutUs-text-box">
              <div>
                <h2
                  className="font-oswald uppercase text-[1.5rem] font-bold
                                mb-2 flex items-center gap-1"
                >
                  <Planet size={34} className="grid-icon" />
                  <p className="tracking-wide">Sustainability</p>
                </h2>
                <p className="font-dmsans font-bold text-left">
                  We're challenging conventional retail putting an end to dead
                  stock, unconventional waste and more.
                </p>
              </div>
              <div>
                <h2
                  className="font-oswald uppercase text-[1.5rem] font-bold
                                mb-2 flex items-center gap-1"
                >
                  <GlobeHemisphereWest size={34} className="grid-icon" />
                  <p className="tracking-wide">Mission</p>
                </h2>
                <p className="font-dmsans font-bold text-left">
                  We're on a mission to empower create independence in a
                  commercial world and incredible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
