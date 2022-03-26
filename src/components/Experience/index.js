import React from 'react';

import { Box, CircularProgress, useTheme } from '@mui/material';

import GitHubStats from "./GitHubStats"

const Experience = ({ loading, error, repos }) => {
  const theme = useTheme();

  return (
    <Box id="Experience" sx={{
      display: "flex",
      backgroundColor: theme.palette.mode === "dark" ? "rgba(100, 51, 202, .6)" : "rgba(147, 112, 219, .6)",
      color: theme.palette.fontColor.primary.main,
      alignContent: "center",
      justifyContent: "center"
    }}>
      {loading ? <CircularProgress /> : <GitHubStats repos={repos} />}
    </Box>
  )
}

export default Experience;