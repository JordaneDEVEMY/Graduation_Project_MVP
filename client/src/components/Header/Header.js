import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@mui/material';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import logo from './logo.svg';
import './header.scss';

function MobileHeader({
  handleMode,
}) {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <img src={logo} alt="O'lleks" className="logo" />
        </Link>

        <ThemeSwitch
          onChange={handleMode}
        />
      </Toolbar>
    </AppBar>
  );
}

MobileHeader.propTypes = {
  handleMode: PropTypes.func.isRequired,
};
MobileHeader.defaultProps = {
};
export default React.memo(MobileHeader);
