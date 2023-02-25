import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { HiPlus } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import useLoading from '../utils/useLoading';
import XImg from '../../XImg';

export default function Accomodations() {
  const [LoadBul, setLoading] = useLoading();
  const [accomadations, setAccomadations] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get('/location/myaccomadations')
      .then((respons) => {
        const { myLocations } = respons.data;
        setAccomadations(myLocations);
        setLoading(false);
      })
      .catch((err) => {
        console.log('respons', err);
        setLoading(false);
      });
  }, [setLoading]);

  const deleteItem = (id) => {
    setLoading(true);
    axios
      .delete('/location/myaccomadations', { data: { id } })
      .then((respons) => {
        setAccomadations(
          accomadations.filter((item) => item._id !== respons.data)
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log('respons', err);
        setLoading(false);
      });
  };
  return (
    <div>
      <LoadBul />
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

      <div className="max-w-3xl m-auto mt-10">
        {accomadations?.length > 0 &&
          accomadations.map((item) => (
            <div key={item._id}>
              <div className="flex gap-4 mb-4 bg-gray-100 p-4">
                <div className="w-32 h-32 bg-gray-300">
                  <XImg
                    src={item.images[0]}
                    alt={item.name}
                    className="object-cover w-32 h-32 "
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xl mb-2">{item.name}</div>
                  <div className="text-sm">{item.description}</div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Link to={`/account/accomadations/edit/${item._id}`}>
                    <FiEdit className="text-3xl bg-white shadow p-2 w-[50px] h-[40px] hover:bg-pri hover:text-white transition" />
                  </Link>
                  <FiTrash2
                    onClick={() => {
                      deleteItem(item._id);
                    }}
                    className=" text-3xl bg-white shadow p-2 w-[50px] h-[40px]  hover:bg-pri hover:text-white cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
