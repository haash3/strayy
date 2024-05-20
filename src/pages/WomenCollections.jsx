import React from 'react'
import "./shopCollections.css"
import { women } from '../components/AllData'
import { Link } from 'react-router-dom'

export const WomenCollections = () => {
  return (
    <div className='container'>
      <div className='sc-container'>
        <div className='sc-head'>
            <h2>Women's Collections.&nbsp;<span>Unveil Your Elegance</span></h2>
        </div>
        <div className='sc-items-container'>
              {women.map((item) => (
                <div key={item.id} className='sc-item'>
                  <img src={item.img} />
                  <h4>{item.name}</h4>
                  <p>Rs.{item.price}</p>
                  <Link to={`/shop/product/${item.id}`}
                  className='link' onClick={() => window.scrollTo(0, 0)}>
                  <button>View Product</button>
                  </Link>

                </div>
              ))}
            </div>
      </div>

    </div>
  )
}
