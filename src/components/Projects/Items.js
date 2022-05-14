import React, { useEffect, useRef } from 'react';

import { gsap } from "gsap";

import { Box, Paper, Typography, useTheme } from '@mui/material';

import { OverFlowText, Buttons } from './SubItems';
import { GitHub } from '@mui/icons-material';

const LeftItem = ({ title, description, fork, handleClick, reposLanguage, currentRepo }) => {
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {
    gsap.fromTo(itemRef.current, {x: 300}, {x: 0, duration: .5});
  }, [handleClick]);

  return (
    <Box sx={{
      filter: "blur(2.5px)", 
      backgroundColor: "background.default",
      transform: "scaleY(.9)",
      }}>
      <Paper ref={itemRef} onClick={handleClick} sx={{
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
        }}>
        <Box className='face face1' sx={{
          width: "300px",
          height: "200px",
          transition: ".4s",

          position: "relative",
          background: "#333",
          display: "flex",
          justifyContent: "center",
          alignContent:"center",
          alignItems: "center",
          zIndex: 1,
          transform: "translateY(100px)",
          }}>
          <Box className='content' sx={{
            opacity: ".2",
            transition:  "0.5s",
            textAlign: "center",
            }}>
            <Typography 
              variant="h5" 
              textAlign={"center"} 
              >
              {title}
            </Typography>
          </Box>
        </Box>
        <Box className='face face2' sx={{
          width: "300px",
          height: "200px",
          transition: ".4s",

          position: "relative",
          background: "whitesmoke",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          boxShadow: "0 20px 50px rgba(0,0,0,.8)",
          transform: "translateY(-100px)",
          }}>
          <Box className='content' sx={{
            color: "black",
            }}>
            {
            description.length > 80 
            ? <OverFlowText text={description}/> 
            : <Typography 
                variant='h4'
                >
                {description}
              </Typography>
            }
            {
            fork 
            ? <Typography 
                variant='h6' 
                sx={{
                  marginBottom: "auto"
                }}>
                {"(This is a colaboration)"}
              </Typography> 
            : null
            }
            <Box sx={{
              display: "flex",
              justifyContent: "center"
              }}>
              <Buttons 
                languages={reposLanguage} 
                currentRepo={currentRepo} 
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

const CenterItem = ({ title, description, fork, reposLanguage, currentRepo }) => {
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {
    gsap.fromTo(itemRef.current, {opacity: 0}, {opacity: 1, duration: .7});
  }, [title]);

  return (
    <Box sx={{
      position: "absolute", 
      zIndex: 1,
      }}>
      <Paper className='card' ref={itemRef} sx={{
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",

        "&:hover .face.face1": {
          transform: "translateY(0)",
          boxShadow: "inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff"
        },
        "&:hover .face.face1 .content": {
          opacity: 1
        },
        "&:hover .face.face2": {
          transform: "translateY(0)",
        },
        }}>
        <Box className='face face1' sx={{
          width: "300px",
          height: "200px",
          transition: ".4s",

          position: "relative",
          background: "#333",
          display: "flex",
          justifyContent: "center",
          alignContent:"center",
          alignItems: "center",
          zIndex: 1,
          transform: "translateY(100px)",
          }}>
          <Box className='content' sx={{
            opacity: ".2",
            transition:  "0.5s",
            textAlign: "center",
            }}>
            <GitHub onClick={() => window.open(`https://github.com/ema4hhh/${title}`, "_blank")} fontSize='large' sx={{
              position: "absolute",
              top: 5,
              right: 5,
              transition: ".6s",
              "&:hover": {
                transform: "translateY(10px) scale(1.05)",
              }
            }} />
            <Typography 
              variant="h5" 
              textAlign={"center"} 
              >
              {title}
            </Typography>
          </Box>
        </Box>

        <Box className='face face2' sx={{
          width: "300px",
          height: "200px",
          transition: ".4s",

          position: "relative",
          background: "whitesmoke",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          boxShadow: "0 20px 50px rgba(0,0,0,.8)",
          transform: "translateY(-100px)",
          }}>
          <Box className='content' sx={{
            color: "black",
            }}>
            {
            description.length > 80 
            ? <OverFlowText text={description}/> 
            : <Typography 
                variant='h4'
                >
                {description}
              </Typography>
            }
            {
            fork 
            ? <Typography 
                variant='h6' 
                sx={{
                  marginBottom: "auto"
                }}>
                {"(This is a colaboration)"}
              </Typography> 
            : null
            }
            <Box sx={{
              display: "flex",
              justifyContent: "center"
            }}>
              <Buttons 
                languages={reposLanguage} 
                currentRepo={currentRepo} 
                />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

const RightItem = ({ title, description, fork, handleClick, reposLanguage, currentRepo }) => {
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {
    gsap.fromTo(itemRef.current, {x: -300}, {x: 0, duration: .5});
  }, [handleClick]);

  return (
    <Box sx={{
      filter: "blur(2.5px)", 
      backgroundColor: "background.default",
      transform: "scaleY(.9)",
      }}>
      <Paper ref={itemRef} onClick={handleClick} sx={{
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
        }}>
        <Box className='face face1' sx={{
          width: "300px",
          height: "200px",
          transition: ".4s",

          position: "relative",
          background: "#333",
          display: "flex",
          justifyContent: "center",
          alignContent:"center",
          alignItems: "center",
          zIndex: 1,
          transform: "translateY(100px)",
          }}>
          <Box className='content' sx={{
            opacity: ".2",
            transition:  "0.5s",
            textAlign: "center",
            }}>
            <Typography 
              variant="h5" 
              textAlign={"center"} 
              >
              {title}
            </Typography>
          </Box>
        </Box>
        <Box className='face face2' sx={{
          width: "300px",
          height: "200px",
          transition: ".4s",

          position: "relative",
          background: "whitesmoke",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          boxShadow: "0 20px 50px rgba(0,0,0,.8)",
          transform: "translateY(-100px)",
          }}>
          <Box className='content' sx={{
            color: "black",
            }}>
            {
            description.length > 80 
            ? <OverFlowText text={description}/> 
            : <Typography 
                variant='h4'
                >
                {description}
              </Typography>
            }
            {
            fork 
            ? <Typography 
                variant='h6' 
                sx={{
                  marginBottom: "auto"
                }}>
                {"(This is a colaboration)"}
              </Typography> 
            : null
            }
            <Box sx={{
              display: "flex",
              justifyContent: "center"
              }}>
              <Buttons 
                languages={reposLanguage} 
                currentRepo={currentRepo} 
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export { LeftItem, CenterItem, RightItem };