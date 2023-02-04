import React, { useEffect, useState } from 'react';

import 'react-day-picker/dist/style.css';
import DateRangeSet from './DateRangeSet';

export default function Booking({ perPrice }) {
  return (
    <div className="bg-white p-4 shadow rounded-2xl grid border">
      <h3 className="font-bold text-center">$ {perPrice} / per night</h3>
      <DateRangeSet />
      <span className="btn btn-primary w-full  ">Book now</span>
    </div>
  );
}
