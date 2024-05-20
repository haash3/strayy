import React from 'react'
import { useContext, useState } from "react";
import { CapItems, acItems, men, women } from '../components/AllData';
import { newItems, discountItems } from '../components/AllData';
import { useParams } from 'react-router-dom';
import './Productpage.css';
import { Heart, Building, Info, CheckCircle } from '@phosphor-icons/react';
import { ShopContext } from '../context/ShopContextProvider';


export const ProductPage = () => {
    const { id } = useParams();
    const thisProduct = CapItems.find(item => item.id === parseInt(id))
        || newItems.find(item => item.id === parseInt(id))
        || discountItems.find(item => item.id === parseInt(id))
        || men.find(item => item.id === parseInt(id))
        || women.find(item => item.id === parseInt(id))
        || acItems.find(item => item.id === parseInt(id))
    // image
    const [image, setImage] = useState(thisProduct.img);
    const changeImage = (e) => {
        setImage(e.target.src);
    };
    // Using context provider for cart
    const { addToCart, cartItems } = useContext(ShopContext);
    // cartItem Count
    const cartItemCount = cartItems[id]
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
                        <button>{thisProduct.size[0]}</button>
                        <button>{thisProduct.size[1]}</button>
                        <button>{thisProduct.size[2]}</button>
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
                        <button id='cart-btn' onClick={() => addToCart(thisProduct.id, this)}>
                            {cartItemCount > 0 ? (
                                <>Added To Cart <CheckCircle size={28} /></>
                            ) : (
                                <>Add To Cart</>
                            )}
                        </button>
                        <button id='wishlist-btn'><Heart size={24} /></button>
                    </div>
                    <div className='details-part'>
                        <hr />
                        <h3>Product details</h3>
                        <p>Net Quantity:&nbsp;<span id='detail'>{thisProduct.productDetails[0]}</span></p>
                        <p>Common generic name:&nbsp;<span>{thisProduct.productDetails[1]}</span></p>
                        <p>Color:&nbsp;<span>{thisProduct.productDetails[2]}</span></p>
                        <p>Size:&nbsp;<span> {thisProduct.productDetails[3]}</span></p>
                        <p> Style:&nbsp;<span>{thisProduct.productDetails[4]}</span></p>
                        <p>Manufactured by:&nbsp;<span>{thisProduct.productDetails[5]}</span></p>
                        <p>Country of Production:&nbsp;<span>{thisProduct.productDetails[6]}</span></p>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}
