import React from 'react';
import { useContext } from 'react';
import './cart.css'
import { CapItems, acItems, men, women } from '../components/AllData';
import { newItems, discountItems } from '../components/AllData';
import { ShopContext } from '../context/ShopContextProvider';
import { CartItem } from './CartItem';
import { ShoppingBag } from '@phosphor-icons/react';


export const Cart = () => {
  const allItems = [...CapItems, ...acItems, ...men, ...women, ...newItems, ...discountItems];
  const { cartItems } = useContext(ShopContext);


  return (
    <div className='container'>
      <div className='cart-container'>
        <div className='cart-head'>
          <div className='cart-head-text'>
              <p>Free shipping above Rs.1999</p>
              <p>Estimate delivery time 2-7 days</p>
              <p>Free & flexible 15 days return</p>
          </div>
        <h2>Shopping Bag <ShoppingBag size={38}/></h2>

        </div>
        <div className='cart-sections'>
      {/* items here */}
        <div className='cart-items'>
          {allItems.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem data={item} />
            }
            
          }
          )}
        </div>
       
       
      </div>
      </div>

    </div>
  )
}
