import React, { useState, useEffect, createContext } from 'react';

const StoreContext = createContext();

export default StoreContext;

export function StoreProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (getIsLoggedIn) {
      const parsegetIsLoggedIn = JSON.parse(getIsLoggedIn);
      if (parsegetIsLoggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
