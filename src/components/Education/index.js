import React from 'react';

// MUI
import { Box, useTheme } from '@mui/material';

// Icons
import { DiPython } from "react-icons/di";
import { MdBrush } from "react-icons/md";
import { BsBraces } from "react-icons/bs";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { HiTranslate } from "react-icons/hi"

// Timeline library
import { Timeline, TimelineEvent } from 'react-event-timeline'

const Education = () => {
  
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()

  return (
    <Box sx={{
      width: "75%",
      margin: "auto",
      marginTop: "10vh",
    }}>
      {/* Need this just for the font color, it doesn't apply when declared above */}
      <Box sx={{
        color: "white",
      }}>
        <Timeline lineColor="rgba(255,255,255,.3)">

          <TimelineEvent
            title="Basic Python"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2020-02-01"
            subtitleStyle={{color: "text.secondary", fontWeight: 600}}
            contentStyle={{backgroundColor: "background.default", color: "#bbbbbb", fontWeight: 600}}
            icon={<DiPython size="5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "#bbbbbb"}}
          >
            Learning basic Python and OOP with personal teacher
          </TimelineEvent>

          <br />

          <TimelineEvent
            title="Javascript, Html and Css3"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2020-11-01"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{backgroundColor: "background.default", color: "#bbbbbb", fontWeight: 600}}
            icon={<MdBrush size="1.6rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "#bbbbbb"}}
          >
            With the same teacher I started to make simple html and css pages and learning basic Javascript
          </TimelineEvent>
          
          <br />

          <TimelineEvent
            title="React, Redux, Express and PosgreSQL"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2021-03-01"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{backgroundColor: "background.default", color: "#bbbbbb", fontWeight: 600}}
            icon={<BsBraces size="1.5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "#bbbbbb"}}
          >
            I learned basic React, Redux, Express and PosgreSQL
          </TimelineEvent>
          
          <br />
          
          <TimelineEvent
            title="PowerBI, SQL Server, Pandas, Seaborn, Algorithms, Machine Learning"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2022-04-05"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{backgroundColor: "background.default", color: "#bbbbbb", fontWeight: 600}}
            icon={<SiMicrosoftsqlserver size="1.5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "#bbbbbb"}}
          >
            CoderHouse course, divided in data analytics and data science
          </TimelineEvent>

          <br />

          <TimelineEvent
            title="German"
            titleStyle={{color: "#ffffff", fontWeight: 600, fontSize: "17px"}}
            subtitle="2022-04-05"
            subtitleStyle={{color: "#faebd7", fontWeight: 600}}
            contentStyle={{backgroundColor: "background.default", color: "#bbbbbb", fontWeight: 600}}
            icon={<HiTranslate size="1.5rem" color="rgb(2, 136, 209)" />}
            bubbleStyle={{backgroundColor: "#1e1e1e", borderColor: "#bbbbbb"}}
          >
            Private class of german
          </TimelineEvent>

        </Timeline>
      </Box>
    </Box>
  )
}

export default Education;