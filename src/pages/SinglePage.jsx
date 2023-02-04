import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { HiOutlineMapPin } from 'react-icons/hi2';

import { useParams } from 'react-router-dom';
import Booking from '../components/Booking';
import Photos from '../components/Photos';
import useLoading from '../components/utils/useLoading';

export default function SinglePage() {
  const { id } = useParams();
  const [LoadBul, showLoading, hideLoading] = useLoading();
  const backendPath = process.env.REACT_APP_BACKEND_BASE;
  const [accomadation, setAccomadation] = useState({});

  useEffect(() => {
    if (id) {
      showLoading();
      axios
        .get(`/location/${id}`)
        .then((response) => {
          const { location } = response.data;
          setAccomadation(location);
          hideLoading();
        })
        .catch((err) => {
          console.log(err);
          hideLoading();
        });
    }
  }, [id]);

  return (
    <div className=" bg-gray-100 py-8 h-full mx-h-[100px]">
      <LoadBul />
      {console.log(accomadation)}
      <div className="container">
        <h1 className="text-3xl">{accomadation.name}</h1>
        <span className="flex gap2 items-center text-xl">
          <HiOutlineMapPin />
          {accomadation.address}
        </span>
      </div>
      <Photos accomadation={accomadation} />
      <div className=" container gap-4 py-4 flex">
        <div className="flex-1">
          <div className="flex gap-4">
            <div className="text-lg">
              <span className="font-bold">Checking time : </span>
              {accomadation.checkin}
            </div>
            <div className="text-lg">
              <span className="font-bold">Checkout time : </span>
              {accomadation.checkOut}
            </div>
            <div className="text-lg">
              <span className="font-bold">Max Guests : </span>{' '}
              {accomadation.maxGuests}
            </div>
          </div>
          <hr />
          <h3 className="font-semibold mb-2">Description</h3>
          <div className="text-lg">{accomadation.description}</div>
        </div>

        <div className="max-w-[360px]">
          <Booking perPrice={accomadation.perPrice} />
        </div>
      </div>
    </div>
  );
}
