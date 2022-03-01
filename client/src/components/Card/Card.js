import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  className,
  currentCard,
}) {
  return (
    <Box
      className={className}
      sx={{
        width: '300px', height: '500px', backgroundColor: '#000', color: '#fff', marginBottom: '10px',
      }}
    >
      <Typography variant="h4">
        {currentCard}
      </Typography>
      <CardHeader />
      <SheetList />
    </Box>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  currentCard: PropTypes.number.isRequired,
};
Card.defaultProps = {
  className: '',
};
export default React.memo(Card);
