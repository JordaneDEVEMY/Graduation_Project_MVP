import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SelectWeek from '../SelectWeek/SelectWeek';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

function MobileHeader({
  mode,
  handleMode,
}) {
  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5">
            O&apos;lleks
          </Typography>
          <Typography variant="h6">
            UserName
          </Typography>

          <ThemeSwitch
            themeMode={mode}
            onChange={handleMode}
          />
          <SelectWeek />
        </Toolbar>
      </AppBar>
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
