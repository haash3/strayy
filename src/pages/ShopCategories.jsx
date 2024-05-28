import React from 'react'
import { useParams } from 'react-router-dom';
import { men, women, acItems } from '../components/AllData';
import "./shopCategories.css"
import { Link } from 'react-router-dom';





export const ShopCategories = () => {
    const { category } = useParams();

    let thisCategory;
    if (category === 'men') {
        thisCategory = men;
    } else if (category === 'women') {
        thisCategory = women;
    } else if (category === 'accessories') {
        thisCategory = acItems;
    } else {
        thisCategory = "No item matched";
    }

    return (
        <div className='container'>
            <div className='sc-container'>
                <div className='sc-head'>
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Collections.&nbsp;<span>Discover your style</span></h2>
                </div>
                <div className='sc-items-container'>
                    {thisCategory.map((item) => (
                        <Link to={`/shop/product/${item.id}`} className='link' onClick={() => window.scrollTo(0, 0)} key={item.id}>
                            <div className='sc-item'>
                                <img src={item.img} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>Rs.{item.price}</p>
                                <button>View Product</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

