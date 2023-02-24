import React, { useState } from 'react';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { countries } from '../assests/constans';

export default function SearchBar() {
  const [country, setCountry] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const navigate = useNavigate();
  const params = { country, guestCount }; // preparing query params to push into route
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: '/place',
      search: `?${createSearchParams(params)}`,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border border-gray-300 rounded-full h-[40px] p-1 pl-4 shadow gap-3">
        <span>
          <select
            className="noBorderInput text-gray-800  leading-10"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="" disabled defaultValue hidden>
              Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country} className="mb-4">
                {country}
              </option>
            ))}
          </select>
        </span>
        <span className=" border-l border-gray-300 h-5"></span>

        <span className="flex justify-center items-center gap-4 ">
          <label htmlFor="guests" className=" text-gray-800  ">
            Guests
          </label>
          <select
            className="noBorderInput"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            id="guests"
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </span>
        <button type="submit" className="p-0 border-0 bg-transparent">
          <IoSearchCircleSharp className=" text-pri text-4xl" />
        </button>
      </div>
    </form>
  );
}
