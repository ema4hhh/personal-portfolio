import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ChangeTheme from "../ChangeTheme"
import { LinearProgress, useTheme } from '@mui/material';

const NavBar = ({ isDarkTheme, changeTheme, loading }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: "background.default"
    }}>
      <AppBar elevation={1} position="fixed" sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        boxShadow: "none",
      }}>
        {loading ? <LinearProgress color="inherit" sx={{zIndex: 1}} /> : null}
        <Toolbar sx={{
          width: "130vh",
          margin: "auto"
        }}>
          <Typography sx={{ 
              flexGrow: 1, 
              fontWeight: "600",
              fontSize: "1.3rem"
            }}>
            {"<ECC />"}
          </Typography>
          <ChangeTheme isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </Box>
  )
}

export default NavBar;