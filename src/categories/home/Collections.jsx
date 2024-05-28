import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './collections.css'

export const Collections = () => {
    return (
        <>
            <div className='container'>
                <div className='section-head'>
                    Start exploring. &nbsp;
                    <span className='text-gray-500'>
                        Good things are waiting for you
                    </span>
                </div>
                <div className='collections-container'>
                    <div className='collections-grid'>
                        <div className='collections-text-side'>
                            <h2>For Men's</h2>
                            <p>Starting from ₹499</p>
                        </div>
                        <div className='collections-btn-side'>
                            <Link to="shop/categories/men" className='link' onClick={() => window.scrollTo(0, 0)}>
                                <p>Shop Now <ArrowRight size={18} /></p>
                            </Link>

                        </div>

                    </div>
                    <div className='collections-grid'>
                        <div className='collections-text-side'>
                            <h2>For Women's</h2>
                            <p>Starting from ₹499</p>
                        </div>
                        <div className='collections-btn-side'>
                            <Link to="/shop/categories/women" className='link' onClick={() => window.scrollTo(0, 0)}>
                                <p>Shop Now <ArrowRight size={18} /></p>
                            </Link>

                        </div>

                    </div>
                    <div className='collections-grid'>
                        <div className='collections-text-side'>
                            <h2>Accessories</h2>
                            <p>Explore Now</p>
                        </div>
                        <div className='collections-btn-side'>
                            <Link to="shop/categories/accessories" className='link' onClick={() => window.scrollTo(0, 0)}>
                                <p>Shop Now <ArrowRight size={18} /></p>
                            </Link>

                        </div>

                    
                    

                    </div>



                </div>
            </div>

        </>
    )
}
