import React from 'react';
import { useContext } from 'react';
import { UserContex } from '../../contex/UserContext';

export default function Profile() {
  const { logOut } = useContext(UserContex);

  return (
    <div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
}
