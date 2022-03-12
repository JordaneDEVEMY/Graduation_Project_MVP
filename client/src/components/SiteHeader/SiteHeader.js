/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function SiteHeader({
  name,
}) {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      component="h3"
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        textShadow: '1px 1px 0 rgb(0 0 0 / 10%)',
        marginBottom: theme.spacing(2),
      }}
    >
      {`${name}`}
    </Typography>
  );
}

SiteHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(SiteHeader);
