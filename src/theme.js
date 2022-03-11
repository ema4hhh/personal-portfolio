import VictorMono from './fonts/victormono-regularVictorMono.ttf';
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode, 
    ...(mode === "light"
    ? {
        primary: "#ef233c",
        secondary: "#ff6367",
        text: {
          primary: "#000000",
          secondary: "#ffffff"
        }
      } 
    : {
        primary: "#b40016",
        secondary: "#ef233c",
        text: {
          primary: "#ffffff",
          secondary: "#000000"
        }
    }),
    text: {VictorMono}
  }
})

export default getDesignTokens;