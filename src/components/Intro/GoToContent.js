import React from 'react'

import { Box, Fab, Fade, useTheme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { width } from '@mui/system';

const GoToContent = ({ trigger }) => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      position: 'fixed', 
      bottom: 50, 
      width: "100%"
    }}>
      <Fade in={!trigger} sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        fontSize: "20px",
        color: "white",
      }}>
        <Fab variant="extended" size='small'>
          <KeyboardArrowDown style={{height: 60, width: 60}}/>
        </Fab>
      </Fade>
    </Box>
  )
}

export default GoToContent;