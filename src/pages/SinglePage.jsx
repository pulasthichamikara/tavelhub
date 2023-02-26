import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { HiOutlineMapPin } from 'react-icons/hi2';

import { useParams } from 'react-router-dom';
import Booking from '../components/Booking';
import Facilites from '../components/Facilites';
import Photos from '../components/Photos';
import SearchBar from '../components/SearchBar';
import useLoading from '../components/utils/useLoading';

export default function SinglePage() {
  const { id } = useParams();
  const [LoadBul, setLoading] = useLoading();

  const [accomadation, setAccomadation] = useState({});
  console.log('accomadation', accomadation);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`/location/${id}`)
        .then((response) => {
          const { location } = response.data;
          setAccomadation(location);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, setLoading]);

  return (
    <div className="  py-4 h-full mx-h-[100px]">
      <div className="flex sm:hidden w-full justify-center mb-4 ">
        <SearchBar />
      </div>
      <LoadBul />

      <div className="container">
        <h1 className="text-3xl">{accomadation.name}</h1>
        <span className="flex gap2 items-center text-xl">
          <HiOutlineMapPin />
          {accomadation.address}
        </span>
      </div>
      <Photos accomadation={accomadation} />
      <div className=" container gap-4 py-4 flex flex-wrap">
        <div className="w-full  lg:flex-1">
          <div className="flex gap-4 flex-wrap">
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
            <div className="text-lg">
              <span className="font-bold">Rooms : </span> {accomadation.rooms}
            </div>
            <div className="text-lg">
              <span className="font-bold">Bath : </span> {accomadation.bath}
            </div>
          </div>
          <hr />
          <h3 className="font-semibold mb-2">Description</h3>
          <div className="text-lg">{accomadation.description}</div>
          <hr />

          <div className="mb-8">
            {accomadation.perks && <Facilites perks={accomadation.perks} />}
          </div>
          <hr />
        </div>

        <div className="m-auto ">
          <Booking
            perPrice={accomadation.perPrice}
            owner={accomadation.owner}
            place={accomadation._id}
          />
        </div>
      </div>
    </div>
  );
}
