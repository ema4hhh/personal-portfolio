import React from 'react'

import { Box, Typography, useTheme } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';

const GitHubStats = ({ repos }) => {
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
          <BookIcon sx={{height: 40, width: 40}}/>
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

export default GitHubStats