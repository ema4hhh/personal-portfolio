import React from 'react'

import { IconButton } from '@mui/material';
import { Brightness3, Brightness7 } from '@mui/icons-material';


const ChangeTheme = ({ setIsDarkTheme, isDarkTheme }) => {

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <IconButton onClick={changeTheme} color="inherit">
      {isDarkTheme ? <Brightness7 /> : <Brightness3 />}
    </IconButton>
  )
}

export default ChangeTheme;