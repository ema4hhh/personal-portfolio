import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ChangeTheme from "../ChangeTheme"
import { useScrollTrigger, useTheme } from '@mui/material';

const NavBar = ({ setIsDarkTheme, isDarkTheme }) => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    threshold: 20,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={ trigger ? {backgroundColor: theme.palette.navOnScroll} : {backgroundColor: theme.navColor, color: theme.navFontColor, boxShadow: theme.navShadow}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: theme.fontFamily }}>
            {"<ECC />"}
          </Typography>
          <ChangeTheme setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;