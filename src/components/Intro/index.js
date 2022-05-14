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
        justifyContent="space-around"
        alignContent="center"
      >
        <Grid item xs={6}>
          <Box sx={{
            marginLeft: "45vh",
            textAlign: "right"
          }}>
            <Box>
              <Typography sx={{
                fontWeight: 500,
                fontSize: "3.0rem",
                marginBottom: "20px",
                color: "text.primary",
                marginRight: "5vh"
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
                textAlign: "center"
              }}></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{
          marginLeft: "5vh"
        }}>
            <Stack direction="row" spacing={3}>
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}
              >
                ReactJS
              </Typography>
              <Typography 
                sx={{
                  fontSize: "1.6rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
              }}>
                NodeJS
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                Express
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                PostgreSQL
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.8rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                Git
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                PowerBI
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.8rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                SQL Server
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                GitHub
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "rgba(255,255,255,.3)",
                  textShadow: "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "translateY(0)",
                    textShadow: "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px"
                  },
                }}>
                MaterialUI
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;