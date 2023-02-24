import { useState } from 'react';

const { createContext } = require('react');

export const UserContex = createContext({});

export function UserContexProvider({ children }) {
  const userDataLocal = localStorage.getItem('userdata');
  const [user, setUser] = useState(
    userDataLocal?.length ? JSON.parse(userDataLocal) : null
  );
  const logOut = () => {
    localStorage.setItem('userdata', '');
    setUser(null);
  };

  return (
    <UserContex.Provider value={{ user, setUser, logOut }}>
      {children}
    </UserContex.Provider>
  );
}
