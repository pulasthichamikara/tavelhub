import { useState } from 'react';

const { createContext } = require('react');

export const UserContex = createContext({});

export function UserContexProvider({ children }) {
  const userDataLocal = localStorage.getItem('userdata');
  const [user, setUser] = useState(JSON.parse(userDataLocal));
  return (
    <UserContex.Provider value={{ user, setUser }}>
      {children}
    </UserContex.Provider>
  );
}
