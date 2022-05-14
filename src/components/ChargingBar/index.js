import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { LinearProgress, useTheme } from '@mui/material';

const NavBar = ({ loading }) => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar elevation={1} position="fixed" sx={{
        boxShadow: "none",
        backgroundColor: "rgba(30,30,30,.9)",
        height: "50px",
        filter: "blur(10px)",
        zIndex: 1
      }}>
        {loading ? <LinearProgress color="inherit" sx={{zIndex: 1}} /> : null}
      </AppBar>
      <Toolbar id="back-to-top-anchor" sx={{backgroundColor: "transparent"}} />
    </Box>
  )
}

export default NavBar;