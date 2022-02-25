import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function MobileHeader() {
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
        </Toolbar>
      </AppBar>
    </header>
  );
}

MobileHeader.propTypes = {
};
MobileHeader.defaultProps = {
};
export default React.memo(MobileHeader);
