import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  className,
}) {
  const theme = useTheme();

  return (
    <Box
      className={className}
      sx={{
        width: '300px', height: '500px', backgroundColor: theme.palette.grey[500], marginBottom: '10px',
      }}
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
