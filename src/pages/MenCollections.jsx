import React from 'react'
import "./shopCollections.css"
import { men } from '../components/AllData'
import { Link } from 'react-router-dom'

export const MenCollections = () => {
  return (
    <div className='container'>
      <div className='sc-container'>
        <div className='sc-head'>
            <h2>Men Collections.&nbsp;<span>Discover your style</span></h2>
        </div>
        <div className='sc-items-container'>
              {men.map((item) => (
                <Link to={`/shop/product/${item.id}`}
                className='link' onClick={() => window.scrollTo(0, 0)}>
                <div key={item.id} className='sc-item'>
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
  )
}
