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
      strings: ["Curious", "Smart", "Gentle", "Serious"],
      typeSpeed: 100,
			loop: true,
			backDelay: 1000,
			backSpeed: 50,
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
      color: "#fff",
    }}>
      <Box style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: "0px",
        left: "0px",
        padding: "0px",
        height: "100%",
        width: "100%",
        opacity: .9,
      }}></Box>
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
          <Box>
            <Typography style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "3rem",
            }}>
              Emanuel Castaño
            </Typography>
            <Typography ref={el} style={{
              fontSize: "1.45rem",
              display: "inline"
            }}></Typography>
          </Box>
        </Box>
      </Box>
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;