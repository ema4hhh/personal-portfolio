import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ChangeTheme from "../ChangeTheme"
import { useTheme } from '@mui/material';

const NavBar = ({ setIsDarkTheme, isDarkTheme, changeTheme, trigger }) => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar elevation={1} position="fixed" sx={{
        backgrounColor: theme.palette.primary.main,
        color: theme.palette.fontColor.primary.main,
        boxShadow: "none"
      }}>
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
      <Toolbar id="back-to-top-anchor" />
    </Box>
  )
}

export default NavBar;