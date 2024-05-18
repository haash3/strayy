import React from "react";
import './deliveryfeatures.css'
import { Package, Truck, CurrencyCircleDollar, Globe } from "@phosphor-icons/react";
export const DeliveryFeatures = () => {
  return (
    <section className="container">
    <div className="delivery-features">
        
        <div className="feature">
          <Package size={28} />
          <div className="feature-text">
          <h2>
            Free shipping 
          </h2>
          <p>
            On orders over ₹499 
          </p>
          </div>
          
        </div>
        <div className="feature">
          <Truck size={28} />
          <div className="feature-text">
          <h2>
            Easy returns 
          </h2>
          <p>
            Just phone number 
          </p>
          </div>
          
        </div>
        <div className="feature">
          <Globe size={28} />
          <div className="feature-text">
          <h2>
            WorldWide Delivery
          </h2>
          <p>
            Fast delivery world wide
          </p>
          </div>
          
        </div>
        <div className="feature">
          <CurrencyCircleDollar size={28} />
          <div className="feature-text">
          <h2>
            Refund policy 
          </h2>
          <p>
            60 days return for any reason
          </p>
          </div>
          
        </div>
        
        
    </div>
    </section>
  );
};
