import React, { useState } from "react";

import { Chip, Stack, Typography } from "@mui/material";

const OverFlowText = ({ text }) => {  
  const [showMore, setShowMore] = useState(false);
  
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  
  return (
    showMore 
    ? <Typography variant="h4" marginLeft={"10px"} marginRight={"10px"}>
        {text} 
        <Typography 
          variant='button' 
          color="rgb(100, 100, 100)" 
          onClick={handleShowMore} 
          display="block">
          Show less
        </Typography>
      </Typography>
    : <Typography variant="h4" marginLeft={"10px"} marginRight={"10px"}>
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

const Buttons = ({ languages }) => {

  return (
    <Stack direction="row" spacing={1}>
      {languages.map((e, i) => <Chip label={e} key={i} variant="outlined" color="secondary" />)}
    </Stack>
  )
}

export { OverFlowText, Buttons };