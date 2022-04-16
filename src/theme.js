import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => (
  mode === "dark" 
  ? {
    ...baseTheme,
    palette: {
      primary: {
        main: "#1e1e1e",
      },
      secondary: {
        main: "#ef233c",
      },
      background: {
        default: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
        secondary: "#292929",
      }
    }
  }
  : {
    ...baseTheme,
    palette: {
      primary: {
        main: "#f5f5f5",
      },
      secondary: {
        main: "#ff6367",
      },
      background: {
        default: "#f5f5f5",
      },
      text: {
        primary: "#000000", 
        secondary: "#ffffff",
      }
    }
  }
);

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

export { getDesignTokens };