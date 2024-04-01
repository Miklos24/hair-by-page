"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#928C88",
    },
    secondary: {
      main: "#B19484",
    },
    background: {
      default: "#FFF9F4",
      paper: "#ECDCD1",
    },
    text: {
      primary: "#765D4F",
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
});

export default theme;
