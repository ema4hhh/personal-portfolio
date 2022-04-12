import React from 'react'

import { Box, Grid, Toolbar, Typography, useTheme } from '@mui/material';

import illustration from "../../assets/Hand-holding-pen-rafiki.svg"

const Intro = () => {

  const theme = useTheme();

  return (
    <Box id="about" sx={{
      backgroundColor: "background.default",
      color: "text.primary",
      }}>
      <Toolbar id="go-to-content" />

      <Box sx={{
        width: "90vh",
        margin: "auto",
      }}>
        <Typography variant='h1' sx={{
          marginBottom: "3vh"
        }}>About Me</Typography>
        <Grid container>
          <Grid item xs={6}>
            <img src={illustration} alt="something is not showing here..." width={"400vh"} height={"400vh"} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h4' sx={{
              marginTop: "10vh",
              textAlign: "left",
              lineHeight: 1.5
            }}>
              Self-taught developer and data science student, passionate about software development, technology and maths. <br />
              Currently on high school, and hatting it
            </Typography> 
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Intro;