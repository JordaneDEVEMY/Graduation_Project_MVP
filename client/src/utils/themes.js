import { createTheme } from '@mui/material/styles';

const themes = {
  dark: {
    palette: {
      background: {
        default: '#121212',
        paper: '#121212',
        component: '#1e1e1e',
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
    },
  },
};

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...themes[mode].palette,
  },
});

export default getTheme;
