import React, { useState } from 'react';

import { LeftItem, CenterItem, RightItem } from './Items';

import { Box, Typography, useTheme, Toolbar } from '@mui/material';

const Item = ({ repos, handleRightRepoClick, handleLeftRepoClick, currentRepo }) => {

  if(currentRepo === 0) {
    return (
      <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}>
        <LeftItem 
          title={repos[repos.length-1].name} 
          description={repos[repos.length-1].description ? repos[repos.length-1].description : "Not description yet"} 
          fork={repos[repos.length-1].fork}
          handleClick={handleLeftRepoClick}
          />
        <CenterItem 
          title={repos[currentRepo].name} 
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"} 
          fork={repos[currentRepo].fork}
          />
        <RightItem 
          title={repos[currentRepo+1].name} 
          description={repos[currentRepo+1].description ? repos[currentRepo+1].description : "Not description yet"} 
          fork={repos[currentRepo+1].fork}
          handleClick={handleRightRepoClick}
          />
      </Box>
    )
  } else if(currentRepo === repos.length-1) {
    return (
      <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}>
        <LeftItem 
          title={repos[currentRepo-1].name} 
          description={repos[currentRepo-1].description ? repos[currentRepo-1].description : "Not description yet"} 
          fork={repos[currentRepo-1].fork}
          handleClick={handleLeftRepoClick}
          />
        <CenterItem 
          title={repos[currentRepo].name} 
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"} 
          fork={repos[currentRepo].fork}
          />
        <RightItem 
          title={repos[0].name} 
          description={repos[0].description ? repos[0].description : "Not description yet"} 
          fork={repos[0].fork}
          handleClick={handleRightRepoClick}
          />
      </Box>
    ) 
  } else {
      return (
        <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}>
          <LeftItem 
            title={repos[currentRepo-1].name} 
            description={repos[currentRepo-1].description ? repos[currentRepo-1].description : "Not description yet"} 
            fork={repos[currentRepo-1].fork}
            handleClick={handleLeftRepoClick}
            />
          <CenterItem 
            title={repos[currentRepo].name} 
            description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"} 
            fork={repos[currentRepo].fork}
            />
          <RightItem 
            title={repos[currentRepo+1].name} 
            description={repos[currentRepo+1].description ? repos[currentRepo+1].description : "Not description yet"} 
            fork={repos[currentRepo+1].fork}
            handleClick={handleRightRepoClick}
            />
        </Box>
      )
    }
}

const Projects = ({ repos, loading, handleRightRepoClick, handleLeftRepoClick, currentRepo }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.fontColor.primary.main,
      }}>
      <Toolbar id="go-to-projects" />
      
      <Typography sx={{marginBottom: "3vh"}} id="projects" variant='h1'>My Projects</Typography>
      {loading ? <p>Cargando...</p> 
        : <Item repos={repos} handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} currentRepo={currentRepo} />
      }
      
    </Box>
  )
}

export default Projects;