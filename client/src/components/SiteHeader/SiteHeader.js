/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function SiteHeader({
  id,
  name,
}) {
  const theme = useTheme();

  return (
    <Typography
      component="h2"
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: theme.spacing(2),
      }}
    >
      {`#${id} ${name}`}
    </Typography>
  );
}

SiteHeader.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(SiteHeader);
