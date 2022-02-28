import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  className,
}) {
  return (
    <Box
      className={className}
      sx={{ width: '300px', height: '500px', backgroundColor: '#fff' }}
    >
      <CardHeader />
      <SheetList />
    </Box>
  );
}

Card.propTypes = {
  className: PropTypes.string,
};
Card.defaultProps = {
  className: '',
};
export default React.memo(Card);
