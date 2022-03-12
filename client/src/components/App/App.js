/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import Layout from '../Layout/Layout';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';
import HomeContainer from '../../containers/HomeContainer';
import Error404 from '../Error404/Error404';
import Legals from '../Legals/Legals';
import Planning from '../Planning/Planning';
import RequireAuth from '../RequireAuth/RequireAuth';
import RequireAdmin from '../RequireAdmin/RequireAdmin';
import RequireUser from '../RequireUser/RequireUser';
import utils from '../../utils';
import './app.scss';
import PlanningAdminContainer from '../../containers/PlanningAdminContainer';
import PlanningContainer from '../../containers/PlanningContainer';
import DatagridEmployeeContainer from '../../containers/DatagridEmployeeContainer';
import CreateSiteFormContainer from '../../containers/CreateSiteFormContainer';
import CreateCompanyFormContainer from '../../containers/CreateCompanyFormContainer';
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer';
import ResetPassword from '../ResetPassword/ResetPassword';

function App({
  isAdmin,
  userId,
}) {
  const [mode, setMode] = useState(utils.themeFunctions.getThemeMode());

  const theme = responsiveFontSizes(utils.getTheme(mode));

  console.log(theme);

  const handleThemeMode = (themeMode) => {
    utils.themeFunctions.setThemeMode(themeMode);
    setMode(themeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Route element={<RequireAuth />}>
            <Route element={<RequireAdmin />}>
              <Route path="admins" element={<Layout isAdmin={isAdmin} />}>
                <Route
                  path="planning"
                  element={(
                    <PlanningAdminContainer isAdmin={isAdmin} />
                    )}
                >
                  <Route
                    path=":weekSlug"
                    element={(
                      <PlanningAdminContainer isAdmin={isAdmin} />
                      )}
                  />
                </Route>
                <Route
                  path="employees"
                  element={(
                    <DatagridEmployeeContainer isAdmin={isAdmin} />
                    )}
                />
                <Route
                  path="sites"
                  element={(
                    <CreateSiteFormContainer isAdmin={isAdmin} />
                    )}
                />
                <Route
                  path="companies"
                  element={(
                    <CreateCompanyFormContainer isAdmin={isAdmin} />
                    )}
                />
              </Route>
            </Route>
            <Route element={<RequireUser />}>
              <Route path="users" element={<Layout isAdmin={isAdmin} />}>
                <Route
                  path={`:${userId}/planning`}
                  element={(
                    <PlanningContainer isAdmin={isAdmin} />
                    )}
                />
              </Route>
            </Route>
          </Route>
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
          <Route path={`/reset-password/${userId}/{token}`} element={<ResetPassword />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

App.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
};

export default React.memo(App);
