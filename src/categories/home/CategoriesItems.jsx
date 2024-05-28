import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'


export const CategoriesItems = ({title, description, link}) => {
  return (
    <div className='collections-grid'>
            <div className='collections-text-side'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='collections-btn-side'>
                <Link to={link} className='link' onClick={() => window.scrollTo(0, 0)}>
                    <p>Shop Now <ArrowRight size={18} /></p>
                </Link>
            </div>
        </div>
  )
}
