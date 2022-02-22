import VictorMono from './fonts/victormono-regularVictorMono.ttf';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 typography: {
   subtitle1: {
     fontSize: 12,
   },
   body1: {
     fontWeight: 500,
   },
   button: {
     fontStyle: 'italic'
   }
 }
})

export default theme;