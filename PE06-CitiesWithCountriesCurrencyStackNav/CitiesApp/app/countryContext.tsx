import React, { createContext, useState } from 'react';

export type Country = {
  country: string;
  currency: string;
};

interface CountryContextType {
  countries: Country[];
  addCountry: (country: Country) => void;
}

export const CountryContext = createContext<CountryContextType>({
  countries: [],
  addCountry: () => {},
});

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const addCountry = (country: Country) => {
    setCountries((prev) => [...prev, country]);
  };

  return (
    <CountryContext.Provider value={{ countries, addCountry }}>
      {children}
    </CountryContext.Provider>
  );
}; 