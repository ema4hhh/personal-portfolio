import React from 'react'

import { Box, Fab, Fade, useTheme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import styled from '@emotion/styled';

const StyledFab = styled(Fab)`
  &:hover {
    background: transparent;
  }
  &:active {
    box-shadow: none
  }
`

const GoToContent = ({ trigger, handleGoToContent }) => {

  return (
    <Box sx={{ 
      position: 'absolute',
      width: "100%",
      bottom: 16,
      display: "flex",
      justifyContent: "center"
    }}>
      <Fade in={!trigger} sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        fontSize: "20px",
        color: "white",
      }}>
        <StyledFab disableRipple variant="extended" size='small' onClick={handleGoToContent}>
          <KeyboardArrowDown sx={{height: 60, width: 60}} />
        </StyledFab>
      </Fade>
    </Box>
  )
}

export default GoToContent;