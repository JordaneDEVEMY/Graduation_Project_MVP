import React from 'react';

// import logo from './logo.svg';
// import './App.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import themeFunctions from '../../utils';
// import logo from './logo.svg';
import './App.css';
import HomePage from '../HomePage/HomePage';

// const theme = createTheme({
//   palette: {
//     mode: themeFunctions.getThemeMode(),
//   },
// });

function App() {
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
    <HomePage />
  );
}

export default App;
