import React, { useContext, useMemo } from "react";

import { Context } from "./Context";

// MUI
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './theme';

// Components
import ChargingBar from "./components/ChargingBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import BackToTop from "./components/BackTotop/";
import Education from "./components/Education";


const App = () => {

  const {
    error,
    loading,
    repos,
    reposLanguage,
    trigger,
    handleGoUpClick,
    handleGoToContent,
    handleRightRepoClick,
    handleLeftRepoClick,
    currentRepo,
  } = useContext(Context);

  const theme = createTheme(getDesignTokens);
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "background.default"}} id="smooth-wrapper">
          <ChargingBar loading={loading} />
        <Box id="smooth-content">  
          <Intro trigger={trigger} handleGoToContent={handleGoToContent}/>
          <About />
          {/* <Skills /> */}
          <Education />
          <Projects 
            repos={repos.current} 
            loading={loading} 
            handleRightRepoClick={handleRightRepoClick} 
            handleLeftRepoClick={handleLeftRepoClick} 
            currentRepo={currentRepo} 
            reposLanguage={reposLanguage} />
          
          <BackToTop trigger={trigger} handleGoUpClick={handleGoUpClick} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;