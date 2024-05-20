import React from 'react'
import { ShopContext } from '../context/ShopContextProvider';
import { useContext } from 'react';

export const CartItem = (props) => {
    const {description, img, name, price, id} = props.data;
  const { removeFromCart } = useContext(ShopContext);
    
  return (
    <div className='cart-item'>
        <img src={img}/>
        <div className='cart-item-details'>
        <h3>{name}</h3>
        <h4>Rs.{price}</h4>
        <p>{description}</p>
        <div className='cart-btns'>
            <button>Move to wishlist</button>
            <button onClick={()=>{removeFromCart(id)}}>
                Remove from cart
            </button>
        </div>
        </div>
        
    </div>
  )
}
