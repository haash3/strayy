import React from "react";
import { Package, Truck, CurrencyCircleDollar, Globe } from "@phosphor-icons/react";
export const DeliveryFeatures = () => {
  return (
    <section className="padding-x pt-[3rem] pb-8">
    <div className="delivery-features">
        
        <div className="feature">
          <Package size={28} />
          <div>
          <h2 className="font-poppins font-semibold lg:text-[1.1rem] text-[0.8rem]">
            Free shipping 
          </h2>
          <p className="font-dmsans font-medium lg:text-[0.9rem] text-[0.6rem]">
            On orders over ₹499 
          </p>
          </div>
          
        </div>
        <div className="feature">
          <Truck size={28} />
          <div>
          <h2 className="font-poppins font-semibold lg:text-[1.1rem] text-[0.8rem]">
            Easy returns 
          </h2>
          <p className="font-dmsans font-medium lg:text-[0.9rem] text-[0.6rem]">
            Just phone number 
          </p>
          </div>
          
        </div>
        <div className="feature">
          <Globe size={28} />
          <div>
          <h2 className="font-poppins font-semibold lg:text-[1.1rem] text-[0.8rem]">
            WorldWide Delivery
          </h2>
          <p className="font-dmsans font-medium lg:text-[0.9rem] text-[0.6rem]">
            Fast delivery world wide
          </p>
          </div>
          
        </div>
        <div className="feature">
          <CurrencyCircleDollar size={28} />
          <div>
          <h2 className="font-poppins font-semibold lg:text-[1.1rem] text-[0.8rem]">
            Refund policy 
          </h2>
          <p className="font-dmsans font-medium lg:text-[0.9rem] text-[0.6rem]">
            60 days return for any reason
          </p>
          </div>
          
        </div>
        
        
    </div>
    </section>
  );
};
