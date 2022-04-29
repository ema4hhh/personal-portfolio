import React, { useEffect, useRef } from 'react';

//Typing animation library
import Typed from "typed.js";

import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

import GoToContent from './GoToContent';

import MyImage from '../../assets/asd.png';

const Intro = ({ trigger, handleGoToContent }) => {
  const theme = useTheme();

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Emanuel, Fullstack Developer", "I'm Emanuel, Data scientific"],
      typeSpeed: 50,
      showCursor: false,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <Box id="home" style={{
      display: "flex",
      position: "relative",
      height: "94vh",
      width: "100%",
    }}>
      <Grid 
        container
        direction="row"
        justifyContent={"space-around"}
        alignContent="center"
      >
        <Grid item xs={6}>
          <Box sx={{
            marginLeft: "45vh",
          }}>
            <Box>
              <Typography sx={{
                fontWeight: 500,
                fontSize: "3.5rem",
                marginBottom: "20px",
                color: "text.primary",
              }}>
                Hey! You found my portfolio
              </Typography>
            </Box>
            <Box sx={{
              width: "600px",
              display: "inline-block"
            }}>
              <Typography ref={el} sx={{
                color: "rgb(141,154,166)",
                fontSize: "1.20rem",
                lineHeight: "1.25",
              }}></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
      </Grid>
      
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;