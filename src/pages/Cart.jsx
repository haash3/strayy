import React from 'react';
import { useContext } from 'react';
import './cart.css'
import { CapItems, acItems, men, women } from '../components/AllData';
import { newItems, discountItems } from '../components/AllData';
import { ShopContext } from '../context/ShopContextProvider';
import { CartItem } from './CartItem';
import { ShoppingBag, ShoppingCartSimple } from '@phosphor-icons/react';


export const Cart = () => {
  const allItems = [...CapItems, ...acItems, ...men, ...women, ...newItems, ...discountItems];
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(totalAmount)

  return (
    <div className='container'>
      <div className='cart-container'>
        <div className='cart-head'>
          <div className='cart-head-text'>
            <p>Free shipping above Rs.1999</p>
            <p>Estimate delivery time 2-7 days</p>
            <p>Free & flexible 15 days return</p>
          </div>
          <h2>Shopping Bag <ShoppingBag size={38} /></h2>

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

          { totalAmount > 0 ? (

          <div className='checkout-section'>
            <h4>Checkout details</h4>
            <p>Discounts <span id='discount'>Apply discounts</span> </p>
            <hr />
            <p>Order value <span>Rs.{totalAmount}</span> </p>
            <p>Delivery <span>FREE</span></p>
            <hr />
            <h5>Total<span>Rs.{totalAmount}</span></h5>
            <button>Continue to checkout</button>
            <p id='cart-description'>Prices and delivery costs are not confirmed until you've reached the checkout.
              15 days free returns. Read more about return and refund policy.
              Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number</p>
          </div>

          ) : (

            <h4 className='empty-cart'>
              Your Shopping Bag is Empty 
              <ShoppingCartSimple size={46} />
            </h4>
          )
        
        
        
        }

        </div>
      </div>

    </div>
  )
}
