import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#151619',
      light: '#1d1f22',
      dark: '#2b2d31',
    },
    secondary: {
      main: '#E46643',
      light: '#f39765',
    },
    background: {
      default: '#151619',
      paper: '#1D1F22',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
};

export const theme = createTheme(themeOptions);