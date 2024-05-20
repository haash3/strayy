import React from 'react'
import { ShopContext } from '../context/ShopContextProvider';
import { useContext } from 'react';
import { Minus, Plus } from '@phosphor-icons/react';

export const CartItem = (props) => {
  const { description, img, name, price, id } = props.data;
  const { removeFromCart, cartItems, updateCartItemCount, addToCart } = useContext(ShopContext);

  return (
    <div className='cart-item'>
      <img src={img} />
      <div className='cart-item-details'>
        <h3>{name}</h3>
        <h4>Rs.{price}</h4>
        <p>{description}</p>
        <div className='cart-btns'>
          <div className='quantity-btns'>
            <button onClick={()=> removeFromCart(id)}><Minus /></button>
            <input value={cartItems[id]} 
                   onChange={(e) => {updateCartItemCount(Number(e.target.value), id)} }/>
            <button onClick={()=> addToCart(id)}><Plus /></button>
          </div>

          <button onClick={() => { removeFromCart(id) }}>
            Remove from cart
          </button>
        </div>
      </div>

    </div>
  )
}
