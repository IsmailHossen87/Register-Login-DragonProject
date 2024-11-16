import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const SingleNewsCard = ({card}) => {
    return (
        <div className="card w-full bg-base-100 shadow-lg rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={card.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">{card.author.name}</p>
            <p className="text-gray-400 text-sm">
              {new Date(card.author.published_date).toLocaleDateString()}
            </p>
          </div>
         
        </div>
        <div className="flex space-x-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
      <p className='font-bold text-xl px-4 py-4'>{card.title}</p>
      {/* Thumbnail Image */}
      <figure>
        <img src={card.image_url} alt="News Thumbnail" className="w-full" />
      </figure>

      {/* Card Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{card.title}</h2>
        <p className="text-gray-500 text-sm mb-3">
          {card.details.slice(0, 150)}... <Link to={`/news/${card._id}`} className="text-blue-500">Read More</Link>
        </p>

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <ReactStars
              count={5}
              value={card.rating.number}
              size={20}
              isHalf={true}
              edit={false}
              activeColor="#ffd700"
            />
            <span className="ml-2 text-gray-500 text-sm">
              ({card.rating.badge})
            </span>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-1 text-gray-500" />
            <span className="text-sm text-gray-500">{card.total_view}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleNewsCard;