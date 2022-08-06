import React, { useEffect, useRef } from 'react';

import { Box, Card, CardActions, CardContent, CardHeader, Typography, useTheme } from '@mui/material';

import { GitHub } from '@mui/icons-material';

const RepoCard = ({ title, description, fork, reposLanguage, currentRepo }) => {

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()

  const itemRef = useRef();

  useEffect(() => {

  }, []);

  return (
    <Box>
      <Card variant='outlined' sx={{
        backgroundColor: "background.default",
        borderColor: "#bbbb",
        width: "350px",
        minHeight: "300px",
        position: "relative"
      }}>
        <CardHeader
          title={title}
        />
        <CardContent>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <GitHub 
            onClick={() => window.open(`https://github.com/ema4hhh/${title}`, "_blank")} 
            fontSize='large' 
            sx={{
              position: "absolute",
              bottom: 10,
              transition: ".6s",
              "&:hover": {
                transform: "translateY(10px) scale(1.05)",
              }
            }} 
          />
        </CardActions>
      </Card>
    </Box>
  )
}

export { RepoCard };