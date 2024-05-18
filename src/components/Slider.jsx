import React from "react";
import { newItems } from "./AllData";
import '../categories/home/newArrivals.css'
import { Link } from "react-router-dom";
export const Slider = () => {
  return (
    <>
      {newItems.map((item) => {
        return (
          <div className="item" key={item.name}>
            <div className="item-header">
              <img src={item.img} alt="product" />
            </div>
            <div className="item-description">
              <h2>₹{item.price}</h2>
              <p>{item.name}</p>
              <Link to={`/shop/product/${item.id}`} className="link">
              <button>View Product</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
