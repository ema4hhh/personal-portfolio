import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  typography: {
    fontFamily: "JetBrains Mono, monospace",
    fonySize: 14,
  },
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
baseTheme.typography.h5 = {
  textAlign: "start",
  fontSize: "1.5rem", 
  fontFamily: 'JetBrains Mono, monospace',
  fontWeight: 700
}
baseTheme.typography.h3 = {
  textAlign: "start",
  fontSize: "1.3rem", 
  fontFamily: 'JetBrains Mono, monospace',
  fontWeight: 500
}
baseTheme.typography.h6 = {
  textAlign: "start",
  fontSize: ".7rem",
  fontFamily: 'JetBrains Mono, monospace',
  fontWeight: 300,
  marginLeft: "10px",
  marginTop: "5px",
  color: "rgb(120,120,120)"
}

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
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
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
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
  },
})

export { darkTheme, lightTheme };