import { CardHeader, FormControlLabel, FormGroup, IconButton, Switch, Typography } from '@mui/material';
import { Brightness3, Brightness7 } from '@mui/icons-material';

import React from 'react'

const SmallComponent = ({ setIsDarkTheme, isDarkTheme, dark, light }) => {

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <IconButton onClick={changeTheme} color="inherit">
      {isDarkTheme ? <Brightness3 /> : <Brightness7 />}
    </IconButton>
  )
}

export default SmallComponent