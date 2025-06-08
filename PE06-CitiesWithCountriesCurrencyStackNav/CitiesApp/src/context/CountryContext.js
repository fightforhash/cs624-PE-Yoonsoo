import React, { createContext, useState } from 'react';

export const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    setCountries((prev) => [...prev, country]);
  };

  const updateCountry = (updatedCountry) => {
    setCountries((prev) => 
      prev.map((country) => 
        country.country === updatedCountry.country ? updatedCountry : country
      )
    );
  };

  return (
    <CountryContext.Provider value={{ countries, addCountry, updateCountry }}>
      {children}
    </CountryContext.Provider>
  );
} 