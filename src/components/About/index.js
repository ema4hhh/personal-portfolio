import React from 'react'

import { Box, Toolbar, Typography, useTheme } from '@mui/material';

const Intro = () => {

  const theme = useTheme();

  return (
    <Box id="about" sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main
      }}>
      <Toolbar id="go-to-content-anchor" />
      <Typography variant='h1'>About Me</Typography>
      <Typography variant='h4'>Intro ingeniosa Emanuel Castaño</Typography>    
    </Box>
  )
}

export default Intro;