import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { fontSize, typography } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#661580',
    color: '#ffffff'
  },
  typography: {
    fontSize: '19px'
  }
}));

export const PresentationText = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction="column" justifyContent="space-around" alignItems="center" spacing={3}>
      <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="true" className={classes.typography}>
          Since beginning my journey as a freelance designer nearly 10 years ago,
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="true">
          I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="true">
          I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </Typography>
      </Grid>
    </Grid>
  );
};

