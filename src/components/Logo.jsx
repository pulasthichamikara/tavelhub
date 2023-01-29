import React from 'react';
import logo from '../assests/logo.png';
import { RiDvFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <div className="text-8xl flex">
      <Link
        to={'/'}
        className="flex justify-center items-center gap-3 border p-3 "
      >
        <RiDvFill />
        <span className="text-[38px] uppercase font-bold">Pint</span>
      </Link>
    </div>
  );
}
