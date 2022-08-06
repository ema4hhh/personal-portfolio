import React from 'react';

import { RepoCard } from './Items';
import { Buttons } from './Buttons';

import { Box, Typography, useTheme, Toolbar, Skeleton } from '@mui/material';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Item = ({ repos, handleRightRepoClick, handleLeftRepoClick, currentRepo, reposLanguage }) => {

  if (currentRepo === 0) {
    return (
      <Box sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}>
        <Buttons side="left" handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} />
        <RepoCard
          title={repos[currentRepo].name}
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"}
          fork={repos[currentRepo].fork}
          reposLanguage={reposLanguage}
          currentRepo={currentRepo}
        />
        <Buttons side="right" handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} />
      </Box>
    )
  } else if (currentRepo === repos.length - 1) {
    return (
      <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
        <Buttons side="left" handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} />
        <RepoCard
          title={repos[currentRepo].name}
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"}
          fork={repos[currentRepo].fork}
          reposLanguage={reposLanguage}
          currentRepo={currentRepo}
        />
        <Buttons side="right" handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} />
      </Box>
    )
  } else {
    return (
      <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
        <Buttons side="left" handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} />
        <RepoCard
          title={repos[currentRepo].name}
          description={repos[currentRepo].description ? repos[currentRepo].description : "Not description yet"}
          fork={repos[currentRepo].fork}
          reposLanguage={reposLanguage}
          currentRepo={currentRepo}
        />
        <Buttons side="right" handleRightRepoClick={handleRightRepoClick} handleLeftRepoClick={handleLeftRepoClick} />
      </Box>
    )
  }
}

const Projects = ({ repos, loading, handleRightRepoClick, handleLeftRepoClick, currentRepo, reposLanguage }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: "background.default",
      color: "text.primary",
      marginTop: "2rem",
    }}>
      <Toolbar id="go-to-projects" />

      <Typography id="projects" variant='h1'>My Projects</Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "2rem",
      }}>
        {
          loading
            ? <Skeleton variant="rectangular" width={300} height={200} />
            : <Item
              repos={repos}
              handleRightRepoClick={handleRightRepoClick}
              handleLeftRepoClick={handleLeftRepoClick}
              currentRepo={currentRepo}
              reposLanguage={reposLanguage}
            />
        }
      </Box>
      <br />
      <br />
    </Box>
  )
}

export default Projects;