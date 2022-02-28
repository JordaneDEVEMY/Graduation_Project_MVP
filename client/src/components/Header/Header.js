import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@mui/material';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import logo from './logo.svg';
import './header.scss';

function MobileHeader({
  mode,
  handleMode,
}) {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={logo} alt="O'lleks" className="logo" />

        <ThemeSwitch
          themeMode={mode}
          onChange={handleMode}
        />
      </Toolbar>
    </AppBar>
  );
}

MobileHeader.propTypes = {
  mode: PropTypes.string.isRequired,
  handleMode: PropTypes.func.isRequired,
};
MobileHeader.defaultProps = {
};
export default React.memo(MobileHeader);
