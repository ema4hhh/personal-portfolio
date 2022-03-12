import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  fontFamily: "Fira Code",
  fonySize: 14,
  navColor: "transparent",
  navFontColor: "white"
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary:  {
      main: "#1e1e1e",
    },
    secondary: {
      main: "#ef233c",
    },
    fontColor: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#000000",
      }
    },
    navFontColor: "white",
    navOnScroll: "#0000bd"
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: "#ff6367",
    },
    fontColor: {
      primary: {
        main: "#000000", 
      },
      secondary: {
        main: "#ffffff",
      }
    },
    navFontColor: "black",
    navOnScroll: "#e4e4ff"
  },
})

export { darkTheme, lightTheme };