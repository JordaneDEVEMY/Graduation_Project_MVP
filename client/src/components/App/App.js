/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import Error404 from '../Error404/Error404';
import Legals from '../Legals/Legals';
import Planning from '../Planning/Planning';
import utils from '../../utils';
import './app.scss';

function App() {
  const [mode, setMode] = React.useState(utils.themeFunctions.getThemeMode());
  const user = {
    id: 1,
    is_admin: true,
  };

  const theme = utils.getTheme(mode);

  const handleThemeMode = (themeMode) => {
    utils.themeFunctions.setThemeMode(themeMode);
    setMode(themeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="app"
        sx={
          {
            backgroundColor: theme.palette.background.default,
          }
        }
      >
        <Header
          handleMode={handleThemeMode}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {user.id
            && (
              (user.is_admin && (
                <Route path="/admins" element={<Layout isAdmin={user.is_admin} />}>
                  <Route
                    path="planning"
                    element={(
                      <Planning isAdmin={user.is_admin} />
                    )}
                  />
                </Route>
              ))
              || (!user.is_admin && (
                <Route path="/users" element={<Layout isAdmin={user.is_admin} />}>
                  <Route
                    path=":user_id/planning"
                    element={(
                      <Planning isAdmin={user.is_admin} />
                    )}
                  />
                </Route>
              ))
            )}
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
