import React from 'react';
import { useContext } from 'react';
import { UserContex } from '../../contex/UserContex';

export default function Profile() {
  const { logOut } = useContext(UserContex);

  return (
    <div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
}
