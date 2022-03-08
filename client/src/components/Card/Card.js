/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  employees,
  id,
  isMobile,
  site,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.component,
        color: theme.palette.text.primary,
        p: theme.spacing(2),
        width: `calc(300px + ${theme.spacing(4)})`,
        overflow: 'hidden',
      }}
    >
      <CardHeader
        site={site}
      />
      <SheetList employees={employees} cardIid={id} isMobile={isMobile} />
    </Box>
  );
}

Card.propTypes = {
  employees: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  site: PropTypes.object.isRequired,
};
Card.defaultProps = {

};
export default React.memo(Card);
