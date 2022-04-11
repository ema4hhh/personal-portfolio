import React, { useState } from 'react';

import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.palette.secondary.main,
  display: "absolute",
  textAlign: "center",
  color: theme.palette.fontColor.secondary.main,
  width: "300px",
  minHeight: "300px",
  lineHeight: '300%',
  backgroundColor: theme.palette.secondary.main,
}))

const OverFlowText = ({ text }) => {  
  const [showMore, setShowMore] = useState(false);
  
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  
  return (
    showMore 
    ? <Typography variant="h4">
        {text} 
        <Typography 
          variant='button' 
          color="rgb(100, 100, 100)" 
          onClick={handleShowMore} 
          display="block">
          Show less
        </Typography>
      </Typography>
    : <Typography variant="h4">
        {text.split("", 79)}... 
        <Typography 
          variant='button' 
          color="rgb(100, 100, 100)" 
          onClick={handleShowMore} 
          display="block">
          Show more
        </Typography>
      </Typography>
  )
}


const LeftItem = ({ title, description, fork, handleClick }) => {
  const theme = useTheme()

  return (
    <Box sx={{
      filter: "blur(2.5px)", 
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 8px 3px rgb(0 0 0 / 25%)",
      transform: "scaleY(.9)",
      }}>
      <Item onClick={handleClick}>
        <Typography variant="h5" textAlign={"center"} sx={{marginBottom: "20px"}}>{title}</Typography>
        <img src='https://repository-images.githubusercontent.com/452071216/1f2b1a80-1539-4221-bb96-030dad7e1aea' width={200} alt="hmm, something's missing here" />
        {description.length > 80 ? <OverFlowText text={description}/> : <Typography>{description}</Typography>}
        {fork ? <Typography variant='h6'>{"(This is a colaboration)"}</Typography> : null}
      </Item>
    </Box>
  )
}

const CenterItem = ({ title, description, fork }) => {
  const theme = useTheme()

  return (
    <Box sx={{
      position: "absolute", 
      zIndex: 1,
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 8px 3px rgb(0 0 0 / 25%)",
      }}>
      <Item>
        <Typography variant="h5" textAlign={"center"} sx={{marginBottom: "20px"}}>{title}</Typography>
        <img src='https://repository-images.githubusercontent.com/452071216/1f2b1a80-1539-4221-bb96-030dad7e1aea' width={200} alt="hmm, something's missing here" />
        {description.length > 80 ? <OverFlowText text={description}/> : <Typography>{description}</Typography>}
        {fork ? <Typography variant='h6'>{"(This is a colaboration)"}</Typography> : null}
      </Item>
    </Box>
  )
}

const RightItem = ({ title, description, fork, handleClick }) => {
  const theme = useTheme()

  return (
    <Box sx={{
      filter: "blur(2.5px)", 
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 8px 3px rgb(0 0 0 / 25%)",
      transform: "scaleY(.9)",
      }}>
      <Item onClick={handleClick}>
        <Typography variant="h5" textAlign={"center"} sx={{marginBottom: "20px"}}>{title}</Typography>
        <img src='https://repository-images.githubusercontent.com/452071216/1f2b1a80-1539-4221-bb96-030dad7e1aea' width={200} alt="hmm, something's missing here" />
        {description.length > 80 ? <OverFlowText text={description}/> : <Typography>{description}</Typography>}
        {fork ? <Typography variant='h6'>{"(This is a colaboration)"}</Typography> : null}
      </Item>
    </Box>
  )
}

export { LeftItem, CenterItem, RightItem };