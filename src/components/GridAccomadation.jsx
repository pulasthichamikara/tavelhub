import React, { useContext, useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';
import useLoading from './utils/useLoading';

import Thumbnail from './Thumbnail';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';

export default function GridAccomadation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [LoadBul, setLoading] = useLoading();
  const [accamodatios, setAccommodations] = useState([]);
  const [page, setPage] = useState(
    searchParams.get('page') ? searchParams.get('page') : 1
  );
  const [pages, setPages] = useState(null);

  useEffect(() => {
    async function fetchAccommodations() {
      try {
        setLoading(true);
        const response = await axios.get('/location/allaccomadations', {
          params: { page },
        });
        setAccommodations(response.data.allLocations);
        setPages(response.data.pages);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAccommodations();
  }, [page, setLoading]);

  return (
    <div className="mt-6">
      <LoadBul />

      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
        {accamodatios?.length > 0 &&
          accamodatios.map((item) => <Thumbnail item={item} key={item._id} />)}
      </div>
      <Pagination pages={pages} page={page} setPage={setPage} />
    </div>
  );
}
