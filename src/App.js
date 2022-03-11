import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import SmallComponent from "./components/SmallComponent";
import { Box, CardHeader, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";

// Define theme settings
const light = {
  palette: {
    mode: "light",
    bg: "white",
    zIndex: 1,
  },
};

const dark = {
  palette: {
    mode: "dark",
    bg: "black",
    color: "white",
    zIndex: 1,
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <div>
        <SmallComponent setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} dark={dark} light={light} />
      </div>
    </ThemeProvider>
  );
};

export default App;