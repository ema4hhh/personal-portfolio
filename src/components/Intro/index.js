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
      strings: ["I'm a passionate and young developer, <br /> working mainly in web technologies."],
      typeSpeed: 50,
      showCursor: false
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
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main,
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
              <Typography style={{
                fontWeight: 500,
                fontSize: "3.5rem",
                marginBottom: "20px",
              }}>
                Hi, I'm Emanuel
              </Typography>
              <Typography variant='h5' sx={{
                color: "rgb(141,154,166)",
                fontSize: "1.5rem",
                marginBottom: "20px"
              }}>
                FULLSTACK DEVELOPER
              </Typography>
            </Box>
            <Box sx={{
              width: "600px",
              display: "inline-block"
            }}>
              <Typography ref={el} style={{
                color: "rgb(141,154,166)",
                fontSize: "1.20rem",
                lineHeight: "1.25",
              }}></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={MyImage} width={""} height={"350vh"} alt="hmm, something didn't load here" sx={{
            marginLeft: "10vh"
          }}/>
        </Grid>
      </Grid>
      
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;