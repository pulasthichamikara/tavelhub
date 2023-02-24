import React from 'react';
import { createSearchParams, Link, useLocation } from 'react-router-dom';

export default function Pagination({ pages, page, setPage }) {
  let items = [];
  const location = useLocation(); // get current page

  const paginationHandle = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page);
    const newSearchString = searchParams.toString();

    const newUrl = `${location.pathname}?${newSearchString}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    setPage(page); // Update state to reflect new page
  };

  // generate pagination items
  for (let number = 1; number <= pages; number++) {
    items.push(
      <li
        className={`${
          number === Number(page) ? 'bg-pri text-white' : 'bg-gray-200'
        } inline-block mx-1 rounded-full h-10 w-10 flex items-center `}
        key={number}
      >
        <span
          className="block text-center w-full"
          style={{ cursor: 'pointer' }}
          onClick={() => paginationHandle(number)}
        >
          {number}
        </span>
      </li>
    );
  }

  return (
    <>{pages > 1 && <ul className="flex justify-center my-4">{items}</ul>}</>
  );
}
