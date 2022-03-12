import React, { useEffect, useRef } from 'react';

//Typing animation library
import Typed from "typed.js";

import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";

import  backgroundImage from "../../assets/intro-bg.jpg"

const Intro = () => {
  const theme = useTheme();

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Curious", "Smart", "Gentle", "Serious"],
      typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30,
    });
    return () => {
      typed.destroy();
      console.log(theme);
    };
  }, []);
  
  return (
    <Box id="home" style={{
      position: "relative",
      backgroundImage: `url(${backgroundImage})`,
      height: "100vh",
      color: "#fff",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center center",
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
            <h1 style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "3rem",
            fontFamily: theme.fontFamily,
            }}>
              Emanuel Castaño
            </h1>
            <span ref={el} style={{
              fontSize: "1.5rem",
              fontWeight: 300,           
            }}></span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Intro;