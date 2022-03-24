import React from 'react'

import { Box, Grid, Typography, useTheme, Paper } from '@mui/material';
import { styled } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.palette.secondary.main,
  textAlign: "center",
  color: theme.palette.fontColor.secondary.main,
  height: 60,
  lineHeight: '300%',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: `2px 1px 14px ${theme.palette.secondary.main}`,
}))

const Skills = () => {
  const theme = useTheme();

  return (
    <Box  sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main,
      }}>
      <Typography id="skill" variant='h1'>
        Skills
      </Typography>
      <Typography variant='h4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
      <Grid container direction="column" spacing={2}>
        <Grid container item xs={6} columnSpacing={5} justifyContent="center">
          <Grid item xs={4}>
            <Item>React</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Redux</Item>
          </Grid>
        </Grid>
        <Grid container item xs={6} columnSpacing={5} justifyContent="center">
          <Grid item xs={4}>
            <Item>MaterialUI</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Express</Item>
          </Grid>
        </Grid>
        <Grid container item xs={6} columnSpacing={5} justifyContent="center">
          <Grid item xs={4}>
            <Item>PostgreSQL</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Linux</Item>
          </Grid>
        </Grid>
        <Grid container item xs={6} columnSpacing={5} justifyContent="center">
          <Grid item xs={4}>
            <Item>Data Scientist</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Python</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills;