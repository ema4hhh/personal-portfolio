import React from 'react';

import { Box, Grid, Typography, useTheme, Paper } from '@mui/material';
import { styled } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.palette.secondary.main,
  textAlign: "center",
  color: theme.palette.fontColor.secondary.main,
  height: 60,
  lineHeight: '300%',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: `2px 1px 14px ${theme.palette.secondary.main}`
}))

const Projects = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main
      }}>
      <Typography id="projects" variant='h1'>My Projects</Typography>
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item xs={6}>
          <Item>Personal Portfolio</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>To-do List</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Password Generator</Item>
        </Grid>
        <Grid item xs={6}><Item>Codigo Sancocho</Item></Grid>
        <Grid item xs={6}>
          <Item>Virtual Mouse</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Learning Node</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Projects;