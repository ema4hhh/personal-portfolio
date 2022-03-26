import React from 'react'

import { Box, Fab, Typography, useTheme } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';

const GitHugStats = ({ repos }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      height: "250px",
      color: "#fff",
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          height: "75px",
          width: "75px",
          boxShadow: "0 0 0 10px #e3c5ff",
        }}>
          <Fab disableFocusRipple disableRipple size='large'>
            <BookIcon />
          </Fab>
        </Box>
        <Box sx={{
          marginTop: "15px"
        }}>
          <Typography variant='h5'>{repos.current}</Typography>
          <Typography variant='h5' sx={{
            fontWeight: 400
          }}>Repositories</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default GitHugStats