import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#555596',
    },
    secondary: {
      main: '#3D91F3',
    },
    info: {
      main: '#FFFFFF',
    },
    background: {
      default:'#555596',
    },
  },

  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default theme;
