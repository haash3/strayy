import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Collections = () => {
  return (
    <>
        <div className='padding-x pt-[8rem]'>
            <div className='font-poppins lg:text-[2.25rem] text-[2rem]
            text-pantone font-semibold'>
                Start exploring. &nbsp;
                <span className='text-gray-500'>
                    Good things are waiting for you
                </span>
            </div>
            <div className='grid gap-8 lg:grid-cols-3 grid-cols-1'>
                <div className='explore-grid'>
                    <div>
                    <p className='explore-grid-head text-dmsans'>For Men's</p>
                    <p className='explore-grid-desp'>Starting from ₹499</p>
                    </div>
                    <div className='explore-grid-btn'>
                        <Link to="/shop">
                        <p className='left-border
                        font-dmsans uppercase text-[0.8rem] flex gap-1 items-center '>
                            Shop Now <ArrowRight size={16} />
                        </p>
                        </Link>
                       
                    </div>
                    
                </div>
                <div className='explore-grid'>
                    <div>
                    <p className='explore-grid-head text-dmsans'>For Women's</p>
                    <p className='explore-grid-desp'>Starting from ₹499</p>
                    </div>
                    <div className='explore-grid-btn'>
                    <Link to="/shop">
                        <p className='left-border
                        font-dmsans uppercase text-[0.8rem] flex gap-1 items-center '>
                            Shop Now <ArrowRight size={16} />
                        </p>
                        </Link>
                    </div>
                    
                </div>
                <div className='explore-grid'>
                    <div>
                    <p className='explore-grid-head text-dmsans'>Accessories</p>
                    <p className='explore-grid-desp'>Explore Now</p>
                    </div>
                    <div className='explore-grid-btn'>
                    <Link to="/shop">
                        <p className='left-border
                        font-dmsans uppercase text-[0.8rem] flex gap-1 items-center '>
                            Shop Now <ArrowRight size={16} />
                        </p>
                        </Link>
                    </div>
                    
                </div>
               
                

            </div>
        </div>
    
    </>
  )
}
