import React, { useContext, useMemo } from "react";

import LazyLoad from 'react-lazyload';

import { Context } from "./Context";

// MUI
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './Theme';

// Components
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import BackToTop from "./components/BackTotop/";


const App = () => {

  const {
    error,
    loading,
    repos,
    trigger,
    handleGoUpClick,
    handleGoToContent,
    handleRightRepoClick,
    handleLeftRepoClick,
    currentRepo,
    colorMode,
    mode,
  } = useContext(Context);

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "background.default"}}>
        <NavBar isDarkTheme={mode} changeTheme={colorMode} loading={loading} />
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