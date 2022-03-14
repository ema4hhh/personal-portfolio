import React from 'react'

import { Box, Typography, useTheme } from '@mui/material';

const Skills = () => {
  const theme = useTheme();

  return (
    <Box  sx={{backgroundColor: theme.palette.primary.main}}>
      <Typography id="skill" variant='h1'>
        Skills
      </Typography>
      <Typography variant='h4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
      <Box>
        {/* MUI grid system */}
        <Box>React</Box>
        <Box>Redux</Box>
        <Box>MaterialUI</Box>
        <Box>NodeJS</Box>
        <Box>PostgreSQL</Box>
        <Box>Linux</Box>
        <Box>Data Scientist</Box>
      </Box>
    </Box>
  )
}

export default Skills;