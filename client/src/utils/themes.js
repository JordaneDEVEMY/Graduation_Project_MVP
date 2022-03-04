import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const themes = {
  dark: {
    ...darkTheme,
    palette: {
      ...darkTheme.palette,
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
    ...lightTheme,
    palette: {
      ...lightTheme.palette,
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

const getTheme = (mode) => ({
  ...themes[mode],
  typography: {
    ...themes[mode].typography,
    allVariants: {
      color: themes[mode].palette.text.primary,
    },
    h1: {
      ...themes[mode].typography.h1,
      fontSize: '2.5rem',
      marginBottom: '.5em',
    },
    h2: {
      ...themes[mode].typography.h2,
      fontSize: '2rem',
      marginBottom: '.5em',
    },
    h3: {
      ...themes[mode].typography.h3,
      fontSize: '1.75rem',
      marginBottom: '.5em',
    },
    h4: {
      ...themes[mode].typography.h4,
      fontSize: '1.5rem',
      marginBottom: '.5em',
    },
    h5: {
      ...themes[mode].typography.h5,
      fontSize: '1.25rem',
      marginBottom: '.5em',
    },
    h6: {
      ...themes[mode].typography.h6,
      fontSize: '1rem',
      marginBottom: '.5em',
    },
  },
});

export default getTheme;
