import React from 'react'
import { createContext, useContext, useState } from "react";
import { CapCollections } from '../categories/home/CapCollections';
import { CapItems } from '../components/AllData';
import { newItems } from '../components/AllData';
import { useParams } from 'react-router-dom';
import './Productpage.css';
import { Heart, Building, Info, CaretCircleDown } from '@phosphor-icons/react';


export const ProductPage = () => {
    const { id } = useParams();
    const thisProduct = CapItems.find(item => item.id === parseInt(id)) || newItems.find(item => item.id === parseInt(id))
    const [image, setImage] = useState(thisProduct.img);
    const changeImage = (e) => {
        setImage(e.target.src);
    };







    return (
        <section className='container'>
            <div className='product-container'>
                <div className='product-img-container'>
                    <img src={image} alt={thisProduct.name} id='main-img' />
                    <div className='mini-images'>
                        <img src={thisProduct.otherImgs[1]} alt="image one" onMouseOver={changeImage} />
                        <img src={thisProduct.otherImgs[2]} alt="image one" onMouseOver={changeImage} />
                        <img src={thisProduct.otherImgs[0]} alt="images two" onMouseOver={changeImage} />
                        <img src={thisProduct.img} alt="image three" onMouseOver={changeImage} />
                    </div>
                </div>
                <div className='product-text-container'>
                    <div className='head-part'>
                        <h1>{thisProduct.name}</h1>
                        <p>{thisProduct.description}</p>
                    </div>
                    <div className='price-part'>
                        <p>MRP Inclusive of all taxes</p>
                        <h2>Rs. {thisProduct.price}</h2>
                    </div>
                    <div className='size-part'>
                        <p>{thisProduct.size[0]}</p>
                        <p>{thisProduct.size[1]}</p>
                    </div>
                    <div className='delivery-part'>
                        <div>
                            <Building size={14} />
                            <p>Not available in stores</p>
                        </div>
                        <div>
                            <Info size={18} />
                            <p>Delivery Time: 2-7 days</p>
                        </div>
                    </div>
                    <div className='button-part'>
                        <button id='cart-btn'>Add To Cart</button>
                        <button id='wishlist-btn'><Heart size={26} /></button>
                    </div>
                    
                    <div className='details-part'>
                    <hr />

                        <h3>Product details</h3>
                        <p>Weight:&nbsp;<span id='detail'>{thisProduct.productDetails[0]}</span></p>
                        <p>Common generic name:&nbsp;<span>{thisProduct.productDetails[1]}</span></p>
                        <p>Model size:&nbsp;<span>{thisProduct.productDetails[2]}</span></p>
                        <p>Size:&nbsp;<span> {thisProduct.productDetails[3]}</span></p>
                        <p>Accessory Style:&nbsp;<span>{thisProduct.productDetails[4]}</span></p>
                        <p>Description:&nbsp;<span>{thisProduct.productDetails[5]}</span></p>
                        <hr />
                 
                    </div>



                </div>



            </div>


        </section>
    )
}
