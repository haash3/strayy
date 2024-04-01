import React from "react";
// import { Button } from '../../../components/Button'
import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <section className="padding-x my-16">
      <div
        className="font-poppins 
                    my-6 text-[32px]"
      >
        Featured
      </div>
      <div
        className="grid sm:grid-cols-3 grid-cols-1
                        sm:gap-5 gap-10"
      >
        <div>
          <img src="./src/assets/images/featured/skymedal1.png" />
          <p
            className="font-poppins text-[22px]
                      mt-12 tracking-tight"
          >
            <Link to={"/shop"}>Sky Medal AW23</Link>
          </p>
        </div>
        <div>
          <img src="./src/assets/images/featured/Airmax90.png" />
          <p
            className="font-poppins text-[22px]
                      mt-12 tracking-tight"
          >
            <Link to={"/shop"}>Air Max 90</Link>
          </p>
        </div>
        <div>
          <img src="./src/assets/images/featured/samba.png" />
          <p
            className="font-poppins text-[22px]
                      mt-12 tracking-tight"
          >
            <Link to={"/shop"}>The 8th Street samba</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
