import React from 'react';

import { Box, useTheme } from '@mui/material';

const Experience = ({ loading, error, repos }) => {
  const theme = useTheme();

  return (
    <Box id="Experience" sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main
    }}>
      { loading ? <p>Cargando</p> : <p>{repos}</p> }
    </Box>
  )
}

export default Experience;