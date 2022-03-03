/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Layout from '../Layout/Layout';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';
import HomeContainer from '../../containers/HomeContainer';
import Error404 from '../Error404/Error404';
import Legals from '../Legals/Legals';
import Planning from '../Planning/Planning';
import utils from '../../utils';
import './app.scss';

function App() {
  const [mode, setMode] = React.useState(utils.themeFunctions.getThemeMode());
  const isLogged = useSelector((state) => state.login.isLogged);
  const isAdmin = useSelector((state) => state.user.isAdmin);

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
        <HeaderContainer
          handleMode={handleThemeMode}
        />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          {isLogged
            && (
              (isAdmin && (
                <Route path="/admins" element={<Layout isAdmin={isAdmin} />}>
                  <Route
                    path="planning"
                    element={(
                      <Planning isAdmin={isAdmin} />
                    )}
                  />
                </Route>
              ))
              || (!isAdmin && (
                <Route path="/users" element={<Layout isAdmin={isAdmin} />}>
                  <Route
                    path=":user_id/planning"
                    element={(
                      <Planning isAdmin={isAdmin} />
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
