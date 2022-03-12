import React from "react";

import { useTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import { Box } from "@mui/material";

const App = ({isDarkTheme, setIsDarkTheme }) => {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.palette.primary.main, fontFamily: theme.palette.fontFamily }}>
      <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
      <Intro />
      <About />
    </Box>
  );
};

export default App;