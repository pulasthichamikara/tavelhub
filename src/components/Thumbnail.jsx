import React from 'react';
import { Link } from 'react-router-dom';
import XImg from '../XImg';

export default function Thumbnail({ item }) {
  return (
    <div>
      <Link to={`/room/${item._id}`} className="group ">
        <div className="bg-gray-500 rounded-2xl aspect-square object-cover group-hover:scale-105 transtion duration-200">
          {item.images[0] && (
            <XImg
              src={item.images[0]}
              alt={item.name}
              className="rounded-2xl aspect-square object-cover group-:"
            />
          )}
        </div>
        <h3 className="text-sm  font-bold mt-1">{item.address}</h3>
        <p className="text-sm truncate mt-1 text-gray-800">
          {item.description}
        </p>
        <span>
          <span className="font-bold">${item.perPrice} </span> per night
        </span>
      </Link>
    </div>
  );
}
