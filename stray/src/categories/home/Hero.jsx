import React from "react";
import { CaretDoubleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import './hero.css'

export const Hero = ({ text }) => {
  return (

    <div className="banner">
      <div className="">
        <div className="banner-container">
          <div className="img-container">
            <div className="text-container">
              <p>{text}</p>
              <h2>Exclusive collections<br />for everyone</h2>
              <Link onClick={() => window.scrollTo(0, 0)} to="/shop">
                <button>Explore Now <CaretDoubleRight size={30} /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

// padding-x py-[8rem] flex flex-col justify-center
// h-[100vh] hero-img lg:bg-hero bg-MiniHero
