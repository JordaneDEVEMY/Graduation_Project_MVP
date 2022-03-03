/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  data,
  className,
}) {
  const theme = useTheme();

  return (
    <Box
      className={className}
      sx={{
        height: '50vh',
        backgroundColor: theme.palette.background.component,
        color: theme.palette.text.primary,
        p: theme.spacing(2),
      }}
    >
      {`${data.label}`}
      <CardHeader />
      <SheetList list={data.employees} />
    </Box>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};
Card.defaultProps = {
  className: '',
};
export default React.memo(Card);
