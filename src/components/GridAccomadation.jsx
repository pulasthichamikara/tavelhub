import React, { useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';
import useLoading from './utils/useLoading';
import { json } from 'react-router-dom';
import Thumbnail from './Thumbnail';

export default function GridAccomadation() {
  const [LoadBul, showLoading, hideLoading] = useLoading();
  const [accamadatios, setAccamadatios] = useState([]);
  useEffect(() => {
    showLoading();
    axios
      .get('/location/allaccomadations')
      .then((respons) => {
        const { allLocations } = respons.data;

        setAccamadatios(allLocations);
        hideLoading();
      })
      .catch((err) => {
        console.log('respons', err);
        hideLoading();
      });
  }, []);

  return (
    <div className="mt-6">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
        {accamadatios.length > 0 &&
          accamadatios.map((item) => <Thumbnail item={item} key={item._id} />)}
      </div>
    </div>
  );
}
