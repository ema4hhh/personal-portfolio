import React from 'react'

import { Box, Fab, Fade, useTheme } from '@mui/material';
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
      }}
    >
      <Fade in={trigger} sx={{
          boxShadow: `2px 1px 14px ${theme.palette.secondary.main}`,
        }}
      >
        <Fab color="primary" size="small">
          <KeyboardArrowUp />
        </Fab>
      </Fade>
    </Box>
  )
}

export default BackToTop;