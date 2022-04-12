import React, { useEffect, useRef } from 'react';

import { gsap } from "gsap";

import { Box, Paper, Typography, useTheme } from '@mui/material';

import { OverFlowText, Buttons } from './SubItems';

const LeftItem = ({ title, description, fork, handleClick }) => {
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {
    gsap.fromTo(itemRef.current, {x: 300}, {x: 0, duration: .5});
  }, [handleClick]);

  return (
    <Box sx={{
      filter: "blur(2.5px)", 
      backgroundColor: "background.default",
      boxShadow: "0 8px 3px rgb(0 0 0 / 25%)",
      transform: "scaleY(.9)",
      }}>
      <Paper ref={itemRef} onClick={handleClick} sx={{
        display: "absolute",
        textAlign: "center",
        color: "text.secondary",
        width: "300px",
        minHeight: "300px",
        lineHeight: '300%',
      }}>
        <Typography 
          variant="h5" 
          textAlign={"center"} 
          sx={{marginBottom: "20px"}}
        >
          {title}
        </Typography>
        <img 
          src='https://repository-images.githubusercontent.com/452071216/1f2b1a80-1539-4221-bb96-030dad7e1aea' 
          width={200} 
          alt="hmm, something's missing here" 
        />
        {
        description.length > 80 
        ? <OverFlowText text={description}/> 
        : <Typography variant='h4' marginLeft={"10px"} marginRight={"10px"}>{description}</Typography>
        }
        {
        fork 
        ? <Typography variant='h6'>{"(This is a colaboration)"}</Typography> 
        : null
        }
      </Paper>
    </Box>
  )
}

const CenterItem = ({ title, description, fork }) => {
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {
    gsap.fromTo(itemRef.current, {opacity: 0}, {opacity: 1, duration: 1});
  }, [title]);

  return (
    <Box sx={{
      position: "absolute", 
      zIndex: 1,
      backgroundColor: "background.default",
      boxShadow: "0 8px 3px rgb(0 0 0 / 25%)",
      }}>
      <Paper ref={itemRef} sx={{
        display: "absolute",
        textAlign: "center",
        color: "text.secondary",
        width: "300px",
        minHeight: "300px",
        lineHeight: '300%',
      }}>
        <Typography 
          variant="h5" 
          textAlign={"center"} 
          sx={{marginBottom: "20px"}}
        >
          {title}
        </Typography>
        <img 
          src='https://repository-images.githubusercontent.com/452071216/1f2b1a80-1539-4221-bb96-030dad7e1aea' 
          width={200} 
          alt="hmm, something's missing here" 
        />
        {
        description.length > 80 
        ? <OverFlowText text={description}/> 
        : <Typography variant='h4' marginLeft={"10px"} marginRight={"10px"}>{description}</Typography>
        }
        {
        fork 
        ? <Typography variant='h6'>{"(This is a colaboration)"}</Typography> 
        : null
        }
      </Paper>
      <Buttons languages={["Javascript", "Python"]} />
    </Box>
  )
}

const RightItem = ({ title, description, fork, handleClick }) => {
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {
    gsap.fromTo(itemRef.current, {x: -300}, {x: 0, duration: .5});
  }, [handleClick]);

  return (
    <Box sx={{
      filter: "blur(2.5px)", 
      backgroundColor: "background.default",
      boxShadow: "0 8px 3px rgb(0 0 0 / 25%)",
      transform: "scaleY(.9)",
      }}>
      <Paper ref={itemRef} onClick={handleClick} sx={{
        display: "absolute",
        textAlign: "center",
        color: "text.secondary",
        width: "300px",
        minHeight: "300px",
        lineHeight: '300%',
      }}>
        <Typography 
          variant="h5" 
          textAlign={"center"} 
          sx={{marginBottom: "20px"}}>
          {title}
        </Typography>
        <img 
          src='https://repository-images.githubusercontent.com/452071216/1f2b1a80-1539-4221-bb96-030dad7e1aea' 
          width={200} 
          alt="hmm, something's missing here" 
        />
        {
        description.length > 80 
        ? <OverFlowText text={description}/> 
        : <Typography variant='h4' marginLeft={"10px"} marginRight={"10px"}>{description}</Typography>
        }
        {
        fork 
        ? <Typography variant='h6'>{"(This is a colaboration)"}</Typography> 
        : null
        }
      </Paper>
    </Box>
  )
}

export { LeftItem, CenterItem, RightItem };