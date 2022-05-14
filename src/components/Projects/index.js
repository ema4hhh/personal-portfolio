import React from 'react';

import { LeftItem, CenterItem, RightItem } from './Items';

import { Box, Typography, useTheme, Toolbar, Skeleton } from '@mui/material';

const Item = ({ repos, handleRightRepoClick, handleLeftRepoClick, currentRepo, reposLanguage }) => {

  if(currentRepo === 0) {
    return (
      <Box sx={{display: "flex", alignContent: "center", justifyContent: "center"}}>
        <LeftItem 
          title={repos[repos.length-1].name} 
          description={repos[repos.length-1].description ? repos[repos.length-1].description : "Not description yet"} 
          fork={repos[repos.length-1].fork}
          handleClick={handleLeftRepoClick}
          reposLanguage={reposLanguage}
          currentRepo={repos.length-1}
          />
        <CenterItem 
          title={repos[currentRepo].name} 
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"} 
          fork={repos[currentRepo].fork}
          reposLanguage={reposLanguage}
          currentRepo={currentRepo}
          />
        <RightItem 
          title={repos[currentRepo+1].name} 
          description={repos[currentRepo+1].description ? repos[currentRepo+1].description : "Not description yet"} 
          fork={repos[currentRepo+1].fork}
          handleClick={handleRightRepoClick}
          reposLanguage={reposLanguage}
          currentRepo={currentRepo+1}
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
          reposLanguage={reposLanguage}
          currentRepo={currentRepo-1}
          />
        <CenterItem 
          title={repos[currentRepo].name} 
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"} 
          fork={repos[currentRepo].fork}
          reposLanguage={reposLanguage}
          currentRepo={currentRepo}
          />
        <RightItem 
          title={repos[0].name} 
          description={repos[0].description ? repos[0].description : "Not description yet"} 
          fork={repos[0].fork}
          handleClick={handleRightRepoClick}
          reposLanguage={reposLanguage}
          currentRepo={0}
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
            reposLanguage={reposLanguage}
            currentRepo={currentRepo-1}
            />
          <CenterItem 
            title={repos[currentRepo].name} 
            description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"} 
            fork={repos[currentRepo].fork}
            reposLanguage={reposLanguage}
            currentRepo={currentRepo}
            />
          <RightItem 
            title={repos[currentRepo+1].name} 
            description={repos[currentRepo+1].description ? repos[currentRepo+1].description : "Not description yet"} 
            fork={repos[currentRepo+1].fork}
            handleClick={handleRightRepoClick}
            reposLanguage={reposLanguage}
            currentRepo={currentRepo+1}
            />
        </Box>
      )
    }
}

const Projects = ({ repos, loading, handleRightRepoClick, handleLeftRepoClick, currentRepo, reposLanguage }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: "background.default",
      color: "text.primary",
      }}>
      <Toolbar id="go-to-projects" />
      
      <Typography sx={{marginBottom: "3vh"}} id="projects" variant='h1'>My Projects</Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
      }}>
        {
        loading 
          ? <Skeleton variant="rectangular" width={300} height={200}  />
          : <Item 
              repos={repos} 
              handleRightRepoClick={handleRightRepoClick} 
              handleLeftRepoClick={handleLeftRepoClick} 
              currentRepo={currentRepo} 
              reposLanguage={reposLanguage} 
            />
        }
      </Box>
      
    </Box>
  )
}

export default Projects;