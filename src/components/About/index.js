import React from 'react'

import { Box, Grid, Toolbar, Typography, useTheme } from '@mui/material';

const Intro = () => {

  const theme = useTheme();

  return (
    <Box id="about" sx={{
      backgroundColor: "background.default",
      color: "text.primary",
      }}>
      <Toolbar id="go-to-content" />

      <Box sx={{
        width: "35rem",
        margin: "auto",
      }}>
        <Typography variant='h1' sx={{
          marginBottom: "3vh"
        }}>Who is this guy?</Typography>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{
              marginTop: "2vh",
              textAlign: "center",
              lineHeight: 1.5
            }}>
              Emanuel is a high school and CoderHouse student who is interested in full-stack development, data analytics, and data science. Emanuel's enthusiasm for technology and mathematics is contagious. He sees himself as a "eternal student" who is ready to both learn and help others.<br /> <br/>
              Emanuel's thirst for knowledge, analytical ability, and resilience have lead him to a happier life, doing what he enjoys, coding.
            </Typography> 
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Intro;