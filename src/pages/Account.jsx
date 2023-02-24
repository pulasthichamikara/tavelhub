import React from 'react';
import { useContext } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Accomodations from '../components/account/Accomodations';
import Booking from '../components/account/Booking';
import Profile from '../components/account/Profile';
import { UserContex } from '../contex/UserContext';

export default function Account() {
  const { page } = useParams();
  const className = 'btn';
  let content = null;
  const { user } = useContext(UserContex);
  switch (page) {
    case 'profile':
      content = <Profile />;
      break;
    case 'bookings':
      content = <Booking />;
      break;
    case 'accomadations':
      content = <Accomodations />;
      break;
    default:
      content = <Profile />;
  }

  return (
    <div className="container">
      {!user && <Navigate to="/login" />}
      <div className="flex  gap-4 m-auto bg-red my-5 w-full justify-center">
        <Link
          to={'/account/profile'}
          className={
            page === 'profile' ? `btn-primary ${className}` : className
          }
        >
          My profile
        </Link>
        <Link
          to={'/account/bookings'}
          className={
            page === 'bookings' ? `btn-primary ${className}` : className
          }
        >
          My bookings
        </Link>
        <Link
          to={'/account/accomadations'}
          className={
            page === 'accomadations' ? `btn-primary ${className}` : className
          }
        >
          My accomadations
        </Link>
      </div>
      {content}
    </div>
  );
}
