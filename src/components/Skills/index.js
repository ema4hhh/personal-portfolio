import React from 'react'

import { Box, Grid, Typography, useTheme, Paper } from '@mui/material';

import Cards from './Cards';

const Skills = () => {
  const theme = useTheme();

  return (
    <Box id="skills"  sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main,
      }}>
      <Box sx={{
        width: "90vh",
        margin: "auto",
      }}>  
        <Typography variant='h1'>
          Skills
        </Typography>
        <Typography variant='h4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        <Grid container direction="row" spacing={2}>
          <Grid container item xs={6} columnSpacing={5} justifyContent="center">
            <Cards cardName={"Frontend"} skill={"React"}/>
          </Grid>
          <Grid container item xs={6} columnSpacing={5} justifyContent="center">
            Backend
          </Grid>
          <Grid container item xs={6} columnSpacing={5} justifyContent="center">
            Database
          </Grid>
          <Grid container item xs={6} columnSpacing={5} justifyContent="center">
            
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Skills;