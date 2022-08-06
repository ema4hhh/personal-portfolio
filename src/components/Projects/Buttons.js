import { IconButton } from '@mui/material';
import React from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const renderButtons = (side, handleRightRepoClick, handleLeftRepoClick) => {
  if (side === "right") {
    return <IconButton sx={{padding: 0}} onClick={handleRightRepoClick}>
      <IoIosArrowForward color='white' sx={{size: "5rem"}} />
    </IconButton>
  } else {
    return <IconButton sx={{padding: 0}}  onClick={handleLeftRepoClick}>
      <IoIosArrowBack color='white' sx={{size: "5rem"}} />
    </IconButton>
  }
}

export const Buttons = ({ side, handleRightRepoClick, handleLeftRepoClick }) => {
  return (
    <>
      {
        renderButtons(side, handleRightRepoClick, handleLeftRepoClick)
      }
    </>
  )
}
