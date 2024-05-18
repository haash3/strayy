import React from 'react'
import "./shop.css"
import { GenderFemale, GenderMale, Sunglasses } from '@phosphor-icons/react'

export const Shop = () => {
  return (
    <>
      <div className='container'>
        <div className='shop-container'>
          <div className='categories'>
            <h2>Shop by category.&nbsp;<span>Explore our collections</span></h2>
            <div className='categories-list'>
              <div>
                <GenderMale size={36} />
                <h3>Men's Wear</h3>
              </div>
              <div>
                <GenderFemale size={36} />
                <h3>Women's Wear</h3>
              </div>
              <div>
                <Sunglasses size={36} />
                <h3>Accessories</h3>
              </div>
            </div>
          </div>
          <div className='offer-collections'>
            
          <h2>Starting from ₹499.&nbsp;<span>Unbeatable Prices on Top Products</span></h2>
          </div>
        </div>
      </div>
    </>
  )
}
