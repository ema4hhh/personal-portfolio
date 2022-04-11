import { useScrollTrigger } from '@mui/material';
import React, { createContext, useRef, useState } from 'react'

import useGetUser from './useGetUser';

const Context = createContext();

const ContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [currentRepo, setCurrentRepo] = useState(5);

  const {
    error,
    repos,
    loading,
  } = useGetUser();

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleRightRepoClick = () => {
    if(currentRepo > repos.length-1) {
      return setCurrentRepo(currentRepo+1)
    } else return setCurrentRepo(0)
  }
  const handleLeftRepoClick = () => {
    if(currentRepo > 0) {
      return setCurrentRepo(currentRepo-1)
    } else return setCurrentRepo(repos.length-1)
  }

  const trigger = useScrollTrigger({
    threshold: 20,
    disableHysteresis: true,
  });

  const handleGoUpClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }}

  const handleGoToContent = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#go-to-content");
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <Context.Provider value={{
      isDarkTheme,
      changeTheme,
      error,
      repos,
      loading,
      trigger,
      handleGoUpClick,
      handleGoToContent,
      handleRightRepoClick,
      handleLeftRepoClick,
      currentRepo,
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };