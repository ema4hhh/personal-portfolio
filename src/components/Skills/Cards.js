import React, { useState } from 'react';

import { Box, Card, CardActions, CardContent, Collapse, IconButton, Paper, Stack, Typography, useTheme, Divider } from '@mui/material';
import { Brush, DataObject, KeyboardArrowDown, SmartToy, Storage } from '@mui/icons-material';

const Cards = ({ cardName, skill }) => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handleExpandContent = () => {
    setExpanded(!expanded)
  }

  const ShowIcon = () => {
    if(cardName === "Frontend"){
      return <Brush color='info' sx={{height: 35, width: 35, marginRight: "15px"}} />
    } else if(cardName === "Backend"){
      return <DataObject  color='info' sx={{height: 35, width: 35, marginRight: "15px"}} />
    } else if(cardName === "Databases"){
      return <Storage  color='info' sx={{height: 35, width: 35, marginRight: "15px"}} />
    } else {
      return <SmartToy  color='info' sx={{height: 35, width: 35, marginRight: "15px"}} />
    }
  }

  return (
    <Card sx={{boxShadow: "none", backgroundColor: "background.default"}}>
      <Box sx={{display: "flex", alignItems: "flex-start", marginTop: "20px"}}>
        <CardContent color={"text.primary"}>
          <Typography variant='h3' sx={{display: "flex", fontWeight: 600}}>
            <ShowIcon />
            {cardName}
          </Typography>
        </CardContent>
        <CardActions sx={{marginLeft: "auto"}}>
          <IconButton onClick={handleExpandContent} disableRipple>
            <KeyboardArrowDown color="info" sx={expanded ? {height: 40, width: 40, transition: ".4s ease-in-out", transform: "rotate(180deg)"} : {height: 40, width: 40, transition: ".4s ease-in-out", transform: "rotate(0deg)"}} />
          </IconButton>
        </CardActions>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{
          marginLeft: "52px",
          marginRight: "12px"
        }}>
          {skill.map((item, i) => (
            <Stack 
              key={i}
              spacing={10}
            >
              <Paper elevation={0} sx={{
                backgroundColor: "background.default",
                marginBottom: "20px"
              }}>
                <Typography variant='h3'>
                  {item}
                </Typography>
                <Divider sx={{
                  borderTop: "2px solid rgb(10, 157, 220)",
                  marginTop: "5px"
                }} />
              </Paper>
            </Stack>
          ))}
          
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Cards;