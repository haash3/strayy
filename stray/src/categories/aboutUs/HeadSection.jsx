import React from "react";
import { aboutUs } from "../../components/AllData";

export const HeadSection = () => {
  return (
    <section className="padding-x padding-y">
      <div className="head-section">
        <div className="bg-aboutusmain headSection-img"></div>
        <div className="font-poppins uppercase headSection-text">
          "Experience the <span className="span text-green-950">evolution</span>of<br />
          Manufacturing with us. <br />
          <span className="text-black/40">-We're changing the game"</span>
        </div>
      </div>
    </section>
  );
};
