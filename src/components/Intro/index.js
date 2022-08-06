import React, { useEffect, useRef } from 'react';

// Typing animation library
import Typed from "typed.js";

// MUI
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

// Components
import GoToContent from './GoToContent';
import { Tecnologies } from './Tecnologies';
import { useState } from 'react';

const Intro = ({ trigger, handleGoToContent }) => {
  const [isMobile, setIsMobile] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  const el = useRef(null);

  useEffect(() => {
    // Typed.js
    const typed = new Typed(el.current, {
      strings: ["I'm Emanuel, Fullstack Developer", "I'm Emanuel, Data scientific"],
      typeSpeed: 50,
      showCursor: false,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    });
    
    // Set mobile devices
    
    if (window.innerWidth > 767) {
      setIsMobile(false);
    } else if (window.innerWidth < 767) {
      setIsMobile(true);
    }

    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <Box id="home" style={{
      display: "flex",
      position: "relative",
      height: "45rem",
      width: "75%",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      flexDirection: "column",
    }}>
      <Grid 
        container
        direction="row"
        justifyContent="space-around"
        alignContent="center"
        spacing={4}
      >
        <Grid item xs={12} sm={6}>
          <Box sx={[isMobile ? {textAlign: "center"} : {textAlign: "right"}]}>
            <Typography sx={{
              fontWeight: 500,
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "text.primary",
            }}>
              Hey!<br /> You found my portfolio
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tecnologies />
        </Grid>
      </Grid>
      <Box sx={{
        width: "25rem",
        display: "block",
        marginTop: "2rem"
      }}>
        <Typography ref={el} sx={{
          color: "rgb(141,154,166)",
          fontSize: "1.20rem",
          lineHeight: "1.25",
          textAlign: "center"
        }}></Typography>
      </Box>
      
      <GoToContent trigger={trigger} handleGoToContent={handleGoToContent}/>
    </Box>
  )
}

export default Intro;