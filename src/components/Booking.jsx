import React, { useState } from 'react';

import 'react-day-picker/dist/style.css';
import DateRangeSet from './DateRangeSet';

import axios from 'axios';

import { Link } from 'react-router-dom';
import useLoading from '../components/utils/useLoading';
export default function Booking({ perPrice, owner, place, maxGuests }) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerTel, setCustomerTel] = useState('');
  const [price, setPrice] = useState(0);
  const [guestCount, setGuestCount] = useState('');
  const [BookingRes, setBookingRes] = useState(null);
  const [LoadBul, setLoading] = useLoading();
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validForm = () => {
    let errors = {};
    let isValid = true;

    if (!customerEmail.trim()) {
      errors.customerEmail = 'Email is required';
      isValid = false;
    } else if (!validateEmail(customerEmail)) {
      errors.customerEmail = 'Invalid email format';
      isValid = false;
    }

    if (guestCount > maxGuests) {
      errors.guest = `Guest count shoud be ${maxGuests} or less `;
    }

    if (!customerName.trim()) {
      errors.customerName = 'Name is required';
      isValid = false;
    }
    if (!customerTel.trim()) {
      errors.customerTel = 'Telephone is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validForm()) {
      setLoading(true);

      const bookingDAta = {
        owner,
        place,
        guestCount,
        checkin,
        checkout,
        price,
        customerName,
        customerTel,
        customerEmail,
      };

      setPrice(perPrice * guestCount);
      await axios
        .post('/booking', bookingDAta)
        .then((respose) => {
          setBookingRes(respose.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <LoadBul />
      <div className="bg-white p-4 shadow-2xl rounded-2xl grid border relative">
        {BookingRes?._id ? (
          <div className="min-w-[300px] m-auto border-dashed border-2 border-pri p-4 rounded-lg grid">
            <h2 className="font-bold text-center">Thank you !!!</h2>
            <hr />
            <p className="font-bold text-center text-gray-800">
              Your booking has submitted
            </p>
            <p className="font-bold text-center text-gray-800 mb-8">
              We will contact you soon
            </p>
            <Link to={'/'} className="btn btn-primary w-full">
              {' '}
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            <h3 className="font-bold text-center ">$ {perPrice} / per night</h3>

            <form onSubmit={submitHandler}>
              <DateRangeSet checkinSet={setCheckin} checkoutSet={setCheckout} />
              <div className="mb-2">
                <label>Guests</label>
                <input
                  type="number"
                  placeholder="Guests"
                  value={guestCount}
                  className="mb-2"
                  onChange={(e) => setGuestCount(e.target.value)}
                  required
                  min={1}
                  max={maxGuests}
                />
              </div>
              {checkin && checkout && guestCount > 0 && (
                <div className="text-2xl border-2 border-dashed border-pri p-2 rounded-lg my-4 text-center">
                  Total price : <span>$ {perPrice * guestCount}</span>
                </div>
              )}
              {checkin && checkout && guestCount && (
                <>
                  <div className="mb-2">
                    <label>Your name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mb-2"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                    {errors.customerName && (
                      <span className="text-red-500">
                        {errors.customerName}
                      </span>
                    )}
                  </div>
                  <div className="mb-2">
                    <label>Telephone </label>
                    <input
                      type="number"
                      placeholder="Your telephone no"
                      className="mb-2"
                      value={customerTel}
                      onChange={(e) => setCustomerTel(e.target.value)}
                    />
                    {errors.customerTel && (
                      <span className="text-red-500">{errors.customerTel}</span>
                    )}
                  </div>
                  <div className="mb-2">
                    <label>Email </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="mb-2"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                    {errors.customerEmail && (
                      <span className="text-red-500">
                        {errors.customerEmail}
                      </span>
                    )}
                  </div>
                </>
              )}

              <button className="btn btn-primary w-full " type="submit">
                Book now
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
