/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './cardheader.scss';

function CardHeader({
  site,
}) {
  return (
    <Typography
      variant="h2"
      sx={{
        lineHeight: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '1.2rem',
        textAlign: 'center',
      }}
    >
      {`${site.name}`}
    </Typography>
  );
}

CardHeader.propTypes = {
  site: PropTypes.object.isRequired,
};
CardHeader.defaultProps = {
};
export default React.memo(CardHeader);
