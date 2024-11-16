import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNewsCard from '../../SingleNewsCard/SingleNewsCard';

const CategoryCard = () => {
    const {data} = useLoaderData()
    
    return (
        <div>
            <h2 className='font-bold text-red-500'>My category{data.length}</h2>
            <div>
                {
                    data?.map(categogy => <SingleNewsCard card={categogy}></SingleNewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCard;