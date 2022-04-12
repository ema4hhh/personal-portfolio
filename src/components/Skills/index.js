import React from 'react'

import { Box, Grid, Typography, useTheme, Toolbar } from '@mui/material';

import Cards from './Cards';

const Skills = () => {
  const theme = useTheme();

  return (
    <Box id="skills"  sx={{
      backgroundColor: "background.default",
      color: "text.primary",
      }}>
      <Toolbar id="go-to-skills" />

      <Box sx={{
        width: "90vh",
        margin: "auto",
      }}>  
        <Typography variant='h1' sx={{marginBottom: "3vh"}}>
          Skills
        </Typography>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} columnSpacing={5} justifyContent="center">
            <Cards cardName={"Frontend"} skill={["JavaScript", "Html", "Css", "React", "MaterialUI"]} />
          </Grid>
          <Grid item xs={6} columnSpacing={5} justifyContent="center">
            <Cards cardName={"Backend"} skill={["Express", "Python"]} />
          </Grid>
          <Grid item xs={6} columnSpacing={5} justifyContent="center">
            <Cards cardName={"Databases"} skill={["PostgreSQL", "SQL", "PowerBI"]}  />
          </Grid>
          <Grid item xs={6} columnSpacing={5} justifyContent="center">
            <Cards cardName={"Artificial Inteligence"} skill={["Python"]} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Skills;