import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  typography: {
    fontFamily: "JetBrains Mono, monospace",
    fonySize: 14,
  },
  navColor: "transparent",
  navFontColor: "white",
  navShadow: "none",
})

baseTheme.typography.h1 = {
  textAlign: "center",
  fontSize: "2.5rem",
  fontFamily: 'JetBrains Mono, monospace',
  fontWeight: "800"
}
baseTheme.typography.h4 = {
  textAlign: "center",
  fontSize: "1.05rem", 
  fontFamily: 'JetBrains Mono, monospace',
}

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