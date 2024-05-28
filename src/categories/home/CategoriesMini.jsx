import React from 'react'
import { Link } from 'react-router-dom'
import './categories.css'
import { CategoriesItems } from './CategoriesItems'

export const CategoriesMini = () => {
    const collectionsData = [
        { title: "For Men's", description: "Starting from ₹499", link: "/shop/categories/men" },
        { title: "For Women's", description: "Starting from ₹499", link: "/shop/categories/women" },
        { title: "Accessories", description: "Explore Now", link: "/shop/categories/accessories" }
    ];
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
                    {collectionsData.map((item, index) => (
                        <CategoriesItems
                            key={index}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}
