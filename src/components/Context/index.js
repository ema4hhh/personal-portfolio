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

  return (
    <Context.Provider value={{
      isDarkTheme,
      changeTheme
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };