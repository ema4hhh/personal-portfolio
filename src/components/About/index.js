import React, { useEffect, useState } from 'react'

import { Box, Toolbar, Typography, useTheme } from '@mui/material';

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  useEffect(() => {

    if (window.innerWidth > 767) {
      setIsMobile(false);
    } else if (window.innerWidth < 767) {
      setIsMobile(true);
    }

  }, [])

  return (
    <Box id="about" sx={{
      backgroundColor: "background.default",
      color: "text.primary",
      width: "75%",
      margin: "auto",
    }}>
      <Toolbar id="go-to-content" />

      <Typography 
        variant='h1' 
        sx={{
        marginBottom: "3vh"
      }}>
        Who is this guy?
      </Typography>

      <Typography variant='h4' sx={[
        {marginTop: "2vh",
        textAlign: "center",
        lineHeight: 1.5},
        isMobile ? {paddingInline: 0} : {paddingInline: "10em"}
      ]}>
        Emanuel is a high school and CoderHouse student who is interested about FullStack web development and data science. Emanuel's enthusiasm for technology and mathematics is contagious. He sees himself as a "eternal student" who is always willing to learn and experience new sensations.<br /> <br/>
        Emanuel's thirst for knowledge, analytical ability, and resilience have lead him to a happier life, doing what he enjoys, coding.
      </Typography> 

    </Box>
  )
}

export default Intro;