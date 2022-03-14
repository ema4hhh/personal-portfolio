import React, { useContext } from "react";

import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './Theme';

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills"

import  backgroundImage from "./assets/intro-bg.jpg"
import Experience from "./components/Experience";
import { Context } from "./components/Context";

const App = () => {
  const {
    isDarkTheme,
    changeTheme
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
        <NavBar isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Intro />
        <About />
        <Skills />
        <Experience />
      </Box>
    </ThemeProvider>
  );
};

export default App;