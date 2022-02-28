import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toolbar } from '@mui/material';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import logo from './logo.svg';
import './header.scss';

function MobileHeader({
  mode,
  handleMode,
}) {
  return (
    <header>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <img src={logo} alt="O'lleks" className="logo" />
        </Link>

        <ThemeSwitch
          themeMode={mode}
          onChange={handleMode}
        />
      </Toolbar>
    </header>
  );
}

MobileHeader.propTypes = {
  mode: PropTypes.string.isRequired,
  handleMode: PropTypes.func.isRequired,
};
MobileHeader.defaultProps = {
};
export default React.memo(MobileHeader);
