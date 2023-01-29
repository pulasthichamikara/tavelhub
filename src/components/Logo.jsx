import React from 'react';
import logo from '../assests/logo.png';
import { MdOutlineTravelExplore } from 'react-icons/md';

import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <div className="text-3xl flex">
      <Link
        to={'/'}
        className="flex justify-center items-center gap-2  rounded text-pri"
      >
        <MdOutlineTravelExplore />
        <span className=" font-bold">tavelx</span>
      </Link>
    </div>
  );
}
