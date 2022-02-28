import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Error404 from '../Error404/Error404';
import Legals from '../Legals/Legals';
import Planning from '../Planning/Planning';
import Footer from '../Footer/Footer';
import utils from '../../utils';
import './App.css';

function App() {
  const [mode, setMode] = React.useState(utils.themeFunctions.getThemeMode());
  const user = {
    id: 1,
    is_admin: true,
  };
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          {user.id
            && (
              (user.is_admin && (
                <Route path="/admins/planning" element={<Planning isAdmin />} />
              ))
              || (!user.is_admin && (
                <Route path="/users/:user_id/planning" element={<Planning isAdmin />} />
              ))
            )}
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
