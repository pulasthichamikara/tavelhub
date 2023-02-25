import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import useLoading from '../components/utils/useLoading';
import Thumbnail from '../components/Thumbnail';
import Pagination from '../components/Pagination';
export default function SearchResult() {
  const location = useLocation(); // get current page
  const searchParams = new URLSearchParams(location.search); // get query params

  const country = searchParams.get('country')
    ? searchParams.get('country')
    : '';
  const guestCount = searchParams.get('guestCount')
    ? searchParams.get('guestCount')
    : 1;

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
          params: { country, guestCount, page },
        });
        console.log(response.data.allLocations);
        setPages(response.data.pages);
        setAccommodations(response.data.allLocations);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAccommodations();
  }, [country, guestCount, page, setLoading]);

  return (
    <div className="mt-6">
      <LoadBul />
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
        {accamodatios && accamodatios.length > 0
          ? accamodatios.map((item) => <Thumbnail item={item} key={item._id} />)
          : 'No data found'}
      </div>
      <Pagination pages={pages} page={page} setPage={setPage} />
    </div>
  );
}
