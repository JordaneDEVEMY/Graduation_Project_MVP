import { createTheme } from '@mui/material/styles';

const themes = {
  dark: {
    palette: {
      background: {
        default: '#121212',
        paper: '#121212',
        component: '#1e1e1e',
      },
      header: {
        main: '#121212',
        contrastText: '#fff',
      },
    },
  },
  light: {
    palette: {
      background: {
        default: '#fff',
        paper: '#fff',
        component: '#f7f7f7',
      },
      header: {
        main: '#121212',
        contrastText: '#fff',
      },
    },
  },
};

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...themes[mode].palette,
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

export default getTheme;
