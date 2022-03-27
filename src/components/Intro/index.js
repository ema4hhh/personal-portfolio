import React, { useEffect, useRef } from 'react';

//Typing animation library
import Typed from "typed.js";

import { Box, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

import GoToContent from './GoToContent';

const Intro = ({ trigger, handleGoToContent }) => {
  const theme = useTheme();

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<b>I'm a passionate and young developer</b>, <br /> working mainly in web technologies, delivering quality work."],
      typeSpeed: 50,
      cursorChar: "_",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <Box id="home" style={{
      position: "relative",
      height: "94vh",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main,
    }}>
      <Box style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "table",
        textAlign: "center",
      }}>
        <Box style={{
          display: "table-cell",
          verticalAlign: "middle",
        }}>
          <Box sx={{
            display: "inline-block",
            textAlign: "start"
          }}>
            <Typography style={{
              fontWeight: 500,
              fontSize: "3.5rem",
              marginBottom: "20px"
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
            <Box sx={{
              width: "600px"
            }}>
              <Typography ref={el} style={{
                color: "rgb(141,154,166)",
                fontSize: "1.20rem",
                display: "inline",
                lineHeight: "1.25"
              }}></Typography>
            </Box>
            
          </Box>
        </Box>
      </Box>
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;