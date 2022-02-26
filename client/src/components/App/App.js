import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import themeFunctions from '../../utils';
import logo from './logo.svg';
import './App.css';

function App() {
  const [mode, setMode] = React.useState(themeFunctions.getThemeMode());
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const handleThemeMode = (themeMode) => {
    themeFunctions.setThemeMode(themeMode);
    setMode(themeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <ThemeSwitch
          themeMode={mode}
          onChange={handleThemeMode}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
