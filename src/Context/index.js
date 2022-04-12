import React, { createContext, useState } from 'react'

import { useScrollTrigger } from '@mui/material';

import useGetUser from './useGetUser';

const Context = createContext();

const ContextProvider = (props) => {
  const [currentRepo, setCurrentRepo] = useState(0);

  const {
    error,
    repos,
    loading,
  } = useGetUser();

  const handleRightRepoClick = () => {
    if(currentRepo === repos.current.length-1) {
      return setCurrentRepo(0)
    } else return setCurrentRepo(currentRepo+1)
  }
  const handleLeftRepoClick = () => {
    if(currentRepo > 0) {
      return setCurrentRepo(currentRepo-1)
    } else return setCurrentRepo(repos.current.length-1)
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

  const [mode, setMode] = useState('light');
  const colorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  return (
    <Context.Provider value={{
      error,
      repos,
      loading,
      trigger,
      handleGoUpClick,
      handleGoToContent,
      handleRightRepoClick,
      handleLeftRepoClick,
      currentRepo,
      colorMode,
      mode,
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };