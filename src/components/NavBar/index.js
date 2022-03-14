import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ChangeTheme from "../ChangeTheme"
import { useScrollTrigger, useTheme } from '@mui/material';

const NavBar = ({ setIsDarkTheme, isDarkTheme, changeTheme }) => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    threshold: 20,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={ 
        trigger ? {backgroundColor: theme.palette.navOnScroll} 
        : {
            backgroundColor: "transparent", 
            color: theme.navFontColor, 
            boxShadow: theme.navShadow
          }
        }>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ 
              flexGrow: 1, 
              fontWeight: "600" 
            }}>
            {"<ECC />"}
          </Typography>
          <ChangeTheme setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;