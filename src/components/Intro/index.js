import React, { useEffect, useRef } from 'react';

// Typing animation library
import Typed from "typed.js";

// MUI
import { Box, Grid, Typography, Stack } from '@mui/material';
import { useTheme } from "@mui/material/styles";

// Components
import GoToContent from './GoToContent';

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
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Grid 
        container
        direction="row"
        justifyContent={"space-around"}
        alignContent="center"
      >
        <Grid item xs={5}>
          <Box sx={{
            marginLeft: "45vh",
          }}>
            <Box>
              <Typography sx={{
                fontWeight: 500,
                fontSize: "3.0rem",
                marginBottom: "20px",
                color: "text.primary",
              }}>
                Hey!<br /> You found my portfolio
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
        <Grid item xs={7}>
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                color: "#F72585"
              }}
            >
              ReactJS
            </Typography>
            <Typography 
              sx={{
                fontSize: "1.6rem",
                color: "#B5179E"
            }}>
              NodeJS
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "#480CA8"
              }}>
              Express
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#3A0CA3"
              }}>
              PostgreSQL
            </Typography>
            <Typography
              sx={{
                fontSize: "1.8rem",
                color: "#560BAD"
              }}>
              Git
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#4895EF"
              }}>
              PowerBI
            </Typography>
            <Typography
              sx={{
                fontSize: "1.8rem",
                color: "#4361EE"
              }}>
              SQL Server
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                fontSize: "1.4rem",
                color: "#4361EE"
              }}>
              GitHub
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                color: "#480CA8"
              }}>
              MaterialUI
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;