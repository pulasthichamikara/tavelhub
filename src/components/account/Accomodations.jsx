import React from 'react';
import { HiPlus } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
export default function Accomodations() {
  return (
    <div>
      <div className="flex w-full justify-between ">
        <h2 className="text-2xl">Accomadations</h2>
        <Link to="/account/accomadations/add">
          <div className="btn inline-flex btn-primary ">
            <div className="flex justify-center items-center gap-4 ">
              <HiPlus className="bg-white rounded-full p1 text-black " /> Add
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
