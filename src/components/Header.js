import React, { useContext } from 'react';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import Logo from './Logo';
import { UserContex } from '../contex/UserContex';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user } = useContext(UserContex);

  return (
    <header className=" border-b border-gray-300  py-4">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex items-center border border-gray-300 rounded-full h-[40px] p-1 pl-4 shadow gap-3">
          <span>Anyware</span>
          <span className=" border-l border-gray-300 h-5"></span>
          <span>Any week</span>
          <span className=" border-l border-gray-300 h-5"></span>
          <span>Add guests</span>
          <IoSearchCircleSharp className=" text-pri text-4xl" />
        </div>

        <div className="flex gap-2 items-center justify-center border rounded-full border-gray-300 px-2 pl-3  h-[40px]">
          <GiHamburgerMenu />
          <FaUserCircle className="text-2xl text-gray-500 " />
          {!!user && (
            <span className=" text-li ">
              <Link
                to="/account/profile
              "
              >
                {user.name}
              </Link>
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
