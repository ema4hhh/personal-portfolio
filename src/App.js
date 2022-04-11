import React, { useContext } from "react";

import LazyLoad from 'react-lazyload';

import { Context } from "./Context";

import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './Theme';

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import BackToTop from "./components/BackTotop/";

const App = () => {
  const {
    isDarkTheme,
    changeTheme,
    error,
    loading,
    repos,
    trigger,
    handleGoUpClick,
    handleGoToContent,
    handleRightRepoClick,
    handleLeftRepoClick,
    currentRepo,
  } = useContext(Context);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box>
        <NavBar isDarkTheme={isDarkTheme} changeTheme={changeTheme} trigger={trigger} />
        <Intro trigger={trigger} handleGoToContent={handleGoToContent}/>
        <About />
        <LazyLoad>
          <Skills />
        </LazyLoad>
        <LazyLoad>
          <Projects repos={repos.current} loading={loading} handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} currentRepo={currentRepo} />
        </LazyLoad>
        <BackToTop trigger={trigger} handleGoUpClick={handleGoUpClick} />
      </Box>
    </ThemeProvider>
  );
};

export default App;