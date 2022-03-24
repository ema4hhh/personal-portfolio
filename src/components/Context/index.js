import { useScrollTrigger } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react'

import useGetUser from './useGetUser';

const Context = createContext();

const ContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const {
    loading,
    error,
    repos, 
    phoneNumber
  } = useGetUser("ema4hhh");

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const trigger = useScrollTrigger({
    threshold: 20,
    disableHysteresis: true,
  });

  const handleGoUpClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }}

  return (
    <Context.Provider value={{
      isDarkTheme,
      changeTheme,
      loading,
      error,
      repos, 
      phoneNumber,
      trigger,
      handleGoUpClick,
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };