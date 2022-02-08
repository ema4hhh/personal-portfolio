import '../styles/PresentationText.css';
import { Grid, Typography } from "@mui/material"

export const PresentationText = () => {
  return(
    <div className='root'>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Typography variant="body1">
        Since beginning my journey as a freelance designer nearly 10 years ago
        </Typography>
        <Typography variant="body1" className='presentation'>
        I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. 
        </Typography>
        <Typography variant="body1" className='presentation'>
        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </Typography>
      </Grid>
    </div>
  );
};

