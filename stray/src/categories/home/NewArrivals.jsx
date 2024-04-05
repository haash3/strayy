import React from 'react'
import { items } from '../../components/AllData'

export const NewArrivals = () => {
  return (
    <div className='row-container'>
      {items.map((item) =>(
        <div key={item.id}> 
          <div> 
            <img src={item.img} className='w-full object-contain' />
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
