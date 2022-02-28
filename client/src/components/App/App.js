import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../Header/Header';
import utils from '../../utils';
import './App.css';
import Footer from '../Footer/Footer';

function App() {
  const [mode, setMode] = React.useState(utils.themeFunctions.getThemeMode());
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const handleThemeMode = (themeMode) => {
    utils.themeFunctions.setThemeMode(themeMode);
    setMode(themeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          mode={mode}
          handleMode={handleThemeMode}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
