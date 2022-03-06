/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './cardheader.scss';

function CardHeader({
  cardIid,
  site,
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
      {`#${cardIid}-${site.name}`}
    </Typography>
  );
}

CardHeader.propTypes = {
  cardIid: PropTypes.number.isRequired,
  site: PropTypes.object.isRequired,
};
CardHeader.defaultProps = {
};
export default React.memo(CardHeader);
