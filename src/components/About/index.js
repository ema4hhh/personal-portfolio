import React from 'react'

import { Box, Typography, useTheme } from '@mui/material';

const Intro = () => {

  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main
      }}>
      <Typography id="about" variant='h1'>About Me</Typography>
      <Typography variant='h4'>Intro ingeniosa Emanuel Castaño</Typography>    
    </Box>
  )
}

export default Intro;