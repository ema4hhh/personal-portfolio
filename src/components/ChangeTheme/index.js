import React from 'react'

import { IconButton } from '@mui/material';
import { Brightness3, Brightness7 } from '@mui/icons-material';


const ChangeTheme = ({ changeTheme, isDarkTheme }) => {



  return (
    <IconButton onClick={changeTheme} color="inherit">
      {isDarkTheme === "dark" ? <Brightness7 /> : <Brightness3 />}
    </IconButton>
  )
}

export default ChangeTheme;