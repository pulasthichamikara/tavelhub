import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className=" p-4 bg-pri shadow md:px-6 md:py-8 text-white">
      <div className="sm:flex sm:items-center sm:justify-between container">
        <Logo class="text-white" />
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white-500 sm:mb-0 ">
          <li>
            <Link to={'/'} className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center ">
        © travelhub All Rights Reserved.
      </span>
    </footer>
  );
}
