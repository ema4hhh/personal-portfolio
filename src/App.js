import React, { useContext } from "react";

import { Context } from "./components/Context";

import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './Theme';

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills"

import  backgroundImage from "./assets/intro-bg.jpg"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BackToTop from "./components/BackTotop/";

const App = () => {
  const {
    isDarkTheme,
    changeTheme,
    loading,
    error,
    repos, 
    phoneNumber,
    trigger,
    handleGoUpClick,
  } = useContext(Context);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
        <NavBar isDarkTheme={isDarkTheme} changeTheme={changeTheme} trigger={trigger} />
        <Intro trigger={trigger} />
        <About />
        <Skills />
        <Box sx={{ backgroundColor: "white" }}>
          { error && <p>Algo salió mal</p> }
          { loading ? <p>Cargando</p> : <Experience loading={loading} error={error} repos={repos} /> }
          
        </Box>
        <Projects />
        <BackToTop trigger={trigger} handleGoUpClick={handleGoUpClick} />
      </Box>
    </ThemeProvider>
  );
};

export default App;