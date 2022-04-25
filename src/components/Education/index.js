import React from 'react';

// MUI
import { Box, useTheme } from '@mui/material';

// Icons
import { DiPython } from "react-icons/di";
import { MdBrush } from "react-icons/md";
import { BsBraces } from "react-icons/bs";

// Timeline library
import { Timeline, TimelineEvent } from 'react-event-timeline'

const Education = () => {

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>
      <Box sx={{
        color: "white",
        display: "inline-block"
      }}>
        <Timeline>
          <TimelineEvent
            title="Basic Python learning"
            createdAt="2020-02-01"
            icon={<DiPython size="5rem" color="rgb(2, 136, 209)" />}
            style={{color: "black"}}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "white"}}
            titleStyle={{color: "#ffffff"}}
          >
            Learning basic Python and OOP with personal teacher
          </TimelineEvent>
          <TimelineEvent
            title="Javascript, Html and Css3"
            createdAt="2020-11-01"
            icon={<MdBrush size="1.6rem" color="rgb(2, 136, 209)" />}
            style={{color: "black"}}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "white"}}
            titleStyle={{color: "#ffffff"}}
          >
            With the same teacher I started to make simple html and css pages and learning basic Javascript
          </TimelineEvent>
          <TimelineEvent
            title="React, Redux, Express and PosgreSQL"
            createdAt="2021-3-01"
            icon={<BsBraces size="1.5rem" color="rgb(2, 136, 209)" />}
            style={{color: "black"}}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "white"}}
            titleStyle={{color: "#ffffff"}}
          >
            Once again, with "the teacher", I learned basic React, Redux, Express and PosgreSQL
          </TimelineEvent>

        </Timeline>
      </Box>
    </Box>
  )
}

export default Education;