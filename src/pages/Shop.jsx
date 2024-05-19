import React from 'react'
import "./shop.css"
import { GenderFemale, GenderMale, Sunglasses } from '@phosphor-icons/react'
import { discountItems } from '../components/AllData'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
    <section className='container'>
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
            <div className='offer-items-container'>
              {discountItems.map((item) => (
                <div key={item.id} className='offer-item'>
                  <img src={item.img} />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <Link to={`/shop/product/${item.id}`}
                  className='link' onClick={() => window.scrollTo(0, 0)}>
                  <button>View Product</button>
                  </Link>

                </div>
              ))}
            </div>
            </div>
        
        </div>
    </section>
  )
}
