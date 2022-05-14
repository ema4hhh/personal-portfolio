import React from 'react'

import { Box, Fab, Slide, useTheme } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const BackToTop = ({ trigger, handleGoUpClick }) => {
  const theme = useTheme();

  return (
    <Box 
      onClick={handleGoUpClick}
      sx={{ 
        position: 'fixed', 
        bottom: 16, 
        right: 16 ,
        transition: ".5s",
        "&:hover": {
          transform: "scale(1.1) translateY(-5px)",
        }
      }}
    >
      <Slide direction='up' in={trigger} sx={{
          boxShadow: `2px 1px 14px ${theme.palette.secondary.main}`,
        }}
      >
        <Fab color="primary" size="small">
          <KeyboardArrowUp />
        </Fab>
      </Slide>
    </Box>
  )
}

export default BackToTop;