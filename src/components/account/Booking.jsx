import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useLoading from '../utils/useLoading';

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [LoadBul, setLoading] = useLoading();
  useEffect(() => {
    setLoading(true);
    axios
      .get('/booking')
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setLoading]);

  const dateConvert = (iso_time) => {
    let dt = new Date(iso_time);
    let yy_mm_dd = dt.toLocaleDateString('en-US', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    return yy_mm_dd;
  };
  return (
    <div className="relative min-h-[400px]">
      {' '}
      <LoadBul />
      <table className="table-auto w-full text-left table-striped">
        <tr>
          <td>Locaion</td>
          <td>checkin </td>
          <td>checkout </td>
          <td>guest count</td>
          <td>contact info</td>
          <td>booking price</td>
        </tr>

        {bookings.length > 0 &&
          bookings.map((item) => (
            <tr key={item._id}>
              <td>{item.place.name}</td>
              <td>{dateConvert(item.checkin)}</td>
              <td>{dateConvert(item.checkout)}</td>
              <td>{item.guestCount}</td>
              <td>
                <tr>{item.customerName}</tr>
                <tr>{item.customerEmail}</tr>
                <tr>{item.customerTel}</tr>
              </td>

              <td>${item.price}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
