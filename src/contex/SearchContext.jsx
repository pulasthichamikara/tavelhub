import { useState } from 'react';

const { createContext } = require('react');

export const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState({});

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
