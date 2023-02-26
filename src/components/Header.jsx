import React, { useContext } from 'react';

import { FaUserCircle } from 'react-icons/fa';
import Logo from './Logo';
import { UserContex } from '../contex/UserContext';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
  const { user } = useContext(UserContex);

  return (
    <header className=" border-b border-gray-300  py-4">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="hidden sm:flex">
          <SearchBar />
        </div>
        <div className="flex gap-2 items-center justify-center border rounded-full border-gray-300 px-2  h-[40px]">
          <FaUserCircle className="text-2xl text-gray-500 " />
          {!!user ? (
            <span className=" text-li ">
              <Link
                to="/account/profile
              "
              >
                {user.name}
              </Link>
            </span>
          ) : (
            <span className=" text-li ">
              <Link
                to="/login
          "
              >
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
