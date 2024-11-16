import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category))
    },[])
    return (
        <div>
           <h3>All Category {category.length}</h3>
           <div className='w-2/3 mt-2'>
           {
            category.map(cate => (
                <NavLink to={`/category/${cate.category_id}`} className='btn flex flex-col mb-3'>{cate.category_name}</NavLink>
            ))
           }
           </div>
        </div>
    );
};

export default LeftNavbar;