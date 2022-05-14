import React from 'react';

// MUI
import { Box, useTheme } from '@mui/material';

// Icons
import { DiPython } from "react-icons/di";
import { MdBrush } from "react-icons/md";
import { BsBraces } from "react-icons/bs";
import { SiMicrosoftsqlserver } from "react-icons/si";

// Timeline library
import { Timeline, TimelineEvent } from 'react-event-timeline'

const Education = () => {
  const theme = useTheme()

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      marginTop: "10vh"
    }}>
      <Box sx={{
        color: "white",
        display: "inline-block"
      }}>
        <Timeline lineColor="rgba(255,255,255,.3)">

          <TimelineEvent
            title="Basic Python"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2020-02-01"
            subtitleStyle={{color: "text.secondary", fontWeight: 600}}
            contentStyle={{color: "black", fontWeight: 600}}
            icon={<DiPython size="5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "rgba(255,255,255,.3)", boxShadow: "#FFF 0px 0px 2px, #FFF 0px 0px 3px, #FFF 0px 0px 5px, #FF2D95 0px 0px 7px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 25px, #FF2D95 0px 0px 20px"}}
          >
            Learning basic Python and OOP with personal teacher
          </TimelineEvent>

          <TimelineEvent
            title="Javascript, Html and Css3"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2020-11-01"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{color: "black", fontWeight: 600}}
            icon={<MdBrush size="1.6rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "rgba(255,255,255,.3)", boxShadow: "#FFF 0px 0px 2px, #FFF 0px 0px 3px, #FFF 0px 0px 5px, #FF2D95 0px 0px 7px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 25px, #FF2D95 0px 0px 20px"}}
          >
            With the same teacher I started to make simple html and css pages and learning basic Javascript
          </TimelineEvent>

          <TimelineEvent
            title="React, Redux, Express and PosgreSQL"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2021-03-01"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{color: "black", fontWeight: 600}}
            icon={<BsBraces size="1.5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "rgba(255,255,255,.3)", boxShadow: "#FFF 0px 0px 2px, #FFF 0px 0px 3px, #FFF 0px 0px 5px, #FF2D95 0px 0px 7px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 25px, #FF2D95 0px 0px 20px"}}
          >
            I learned basic React, Redux, Express and PosgreSQL
          </TimelineEvent>

          <TimelineEvent
            title="PowerBI, SQL Server, Algorithms and Machine Learning"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2022-04-05"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{color: "black", fontWeight: 600}}
            icon={<SiMicrosoftsqlserver size="1.5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "rgba(255,255,255,.3)", boxShadow: "#FFF 0px 0px 2px, #FFF 0px 0px 3px, #FFF 0px 0px 5px, #FF2D95 0px 0px 7px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 10px, #FF2D95 0px 0px 25px, #FF2D95 0px 0px 20px"}}
          >
            CoderHouse course, divided in data analytics and data science
          </TimelineEvent>

        </Timeline>
      </Box>
    </Box>
  )
}

export default Education;