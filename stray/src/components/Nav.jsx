import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='flex items-center justify-around gap-4'>
      <h4 className='font-poppins font-bold text-6xl'>stray.</h4>
      
      <Link>Men</Link>
      <Link>Women</Link>
      <Link>New-Arrivals</Link>
      <Link>Help</Link>
      <Link>Cart</Link>

    
    </nav>
  )
};