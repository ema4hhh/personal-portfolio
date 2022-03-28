import React, { useState } from 'react';

import { Button, Card, CardActions, CardContent, Collapse, Paper, Stack, useTheme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const Cards = ({ cardName, skill }) => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handleExpandContent = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardContent color={theme.palette.fontColor.primary.main}>
        {cardName}
      </CardContent>
      <CardActions>
        <Button onClick={handleExpandContent}><KeyboardArrowDown /></Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack spacing={2}>
            <Paper sx={{
              backgroundColor: theme.palette.secondary.main
            }}>
              {skill}
            </Paper>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Cards;