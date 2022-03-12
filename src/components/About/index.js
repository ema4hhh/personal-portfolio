import { useTheme } from '@mui/material'
import React from 'react'

const Intro = () => {

  const theme = useTheme();

  return (
    <div style={{ fontFamily: theme.fontFamily, fontSize: theme.fontSize, color: theme.palette.fontColor.primary.main,backgroundColor: theme.palette.primary }}>
      <h1 id="about">About</h1>
      Intro ingeniosa Emanuel Castaño
    </div>
  )
}

export default Intro;