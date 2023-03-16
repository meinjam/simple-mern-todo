import React, { useState, useEffect, createContext } from 'react';

const StoreContext = createContext();

export default StoreContext;

export function StoreProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isApiLoading, setIsApiLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('dark');

    const getIsDarkMode = localStorage.getItem('isDarkMode');

    if (getIsDarkMode) {
      const parsegetIsDarkMode = JSON.parse(getIsDarkMode);
      if (parsegetIsDarkMode) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  const handleDarkMode = (value) => {
    setIsDarkMode(value);
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <StoreContext.Provider
      value={{
        isDarkMode,
        handleDarkMode,
        isApiLoading,
        setIsApiLoading,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
