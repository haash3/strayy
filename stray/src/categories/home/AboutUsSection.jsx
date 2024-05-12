import React from "react";
import { Link } from "react-router-dom";
import {
  Planet,
  GlobeHemisphereWest,
  ArrowUpRight,
} from "@phosphor-icons/react";
import './aboutussection.css'

export const AboutUsSection = () => {
  return (
    <>
      <div className="container">
      <div className="section-head">
          About Us. &nbsp;
          <span className="text-gray-500">Join Our Journey</span>
        </div>
        <div className="about-us-section">
          <div className="about-img-side">
            <Link to="/about">
              <div className="learn-more-btn">
                <p className="font-dmsans">Learn More </p>
                <ArrowUpRight size={30} />
              </div>
            </Link>
          </div>
          <div className="about-text-side">
            <h1>We're Changing the way things get made.</h1>
            <div className="about-text-side-info">
              <div>
                <h2>
                  <Planet size={34} />
                  <p>Sustainability</p>
                </h2>
                <p className="description">
                  We're challenging conventional retail putting an end to dead
                  stock, unconventional waste and more.
                </p>
              </div>
              <div>
                <h2>
                  <GlobeHemisphereWest size={34}/>
                  <p>Mission</p>
                </h2>
                <p className="description">
                  We're on a mission to empower create independence in a
                  commercial world and incredible.
                </p>
                <button id="about-us-mini">Learn More  <ArrowUpRight size={30} /></button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
