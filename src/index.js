import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from './Theme';
import App from './App';

function Theming() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return(
  <ThemeProvider  theme={isDarkTheme ? darkTheme : lightTheme}>
    <App isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
  </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Theming />
  </React.StrictMode>,
  document.getElementById('root')
);
