import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Arial'
  },
}));


export const NavBar = () => {
  const classes = useStyles();

  return(
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
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
