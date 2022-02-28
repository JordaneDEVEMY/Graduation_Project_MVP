import React from 'react';
// import logo from './logo.svg';
// import themeFunctions from '../../utils';
// import logo from './logo.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../Header/Header';
import utils from '../../utils';
import './App.css';

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
  // <ThemeProvider theme={theme}>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit
  //         {' '}
  //         <code>src/App.js</code>
  //         {' '}
  //         and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // </ThemeProvider>

    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          mode={mode}
          handleMode={handleThemeMode}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
