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
              <Link to="/men" className='link' onClick={() => window.scrollTo(0, 0)}>
                <h3>Men's Wear</h3>
              </Link>
            </div>
            <div>
              <GenderFemale size={36} />
              <Link to="/women" className='link' onClick={() => window.scrollTo(0, 0)}>
                <h3>Women's Wear</h3>
              </Link>
            </div>
            <div>
              <Sunglasses size={36} />
              <Link to="/accessories" className='link' onClick={() => window.scrollTo(0, 0)}>
                <h3>Accessories</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='offer-collections'>
          <h2>Starting from ₹499.&nbsp;<span>Unbeatable Prices on Top Products</span></h2>
          <div className='offer-items-container'>
            {discountItems.map((item) => (
              <Link to={`/shop/product/${item.id}`}
                className='link' onClick={() => window.scrollTo(0, 0)}>
                <div key={item.id} className='offer-item'>
                  <img src={item.img} />
                  <h4>{item.name}</h4>
                  <p>Rs.{item.price}</p>

                  <button>View Product</button>

                </div>
              </Link>

            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
