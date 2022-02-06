import '../styles/NavBar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const NavBar = () => {
  return(
  <div className='root'>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className='title'>
          Emanuel Castaño Cardona
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Education</Button>
        <Button color="inherit">Contact me</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
};
