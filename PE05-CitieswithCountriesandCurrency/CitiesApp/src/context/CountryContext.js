import React, { createContext, useState } from 'react';

export const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    setCountries((prev) => [...prev, country]);
  };

  return (
    <CountryContext.Provider value={{ countries, addCountry }}>
      {children}
    </CountryContext.Provider>
  );
} 