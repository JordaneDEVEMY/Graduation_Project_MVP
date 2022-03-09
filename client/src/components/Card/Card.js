/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardHeader from '../CardHeader/CardHeader';
import SheetList from '../SheetList/SheetList';
import SheetListDroppable from '../SheetListDroppable/SheetListDroppable';

import './card.scss';

function Card({
  employees,
  id,
  isAdmin,
  isMobile,
  setDraggedSheetId,
  site,
}) {
  const theme = useTheme();

  // accordion state
  const [expandedSheet, setExpandedSheet] = React.useState('');

  /**
   * set expanded state
   * @param {string} accordionId accordion id
   * @returns {string|boolean} accordion id or false
   */
  const handleChange = (accordionId) => (event, isExpanded) => {
    setExpandedSheet(isExpanded ? accordionId : '');
  };

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
      id={site.id}
    >
      <CardHeader
        site={site}
      />
      {(isMobile || !isAdmin)
        ? (
          <SheetList
            employees={employees}
            cardId={id}
            handleChange={handleChange}
            expandedSheet={expandedSheet}
          />
        )
        : (
          <SheetListDroppable
            employees={employees}
            cardId={id}
            handleChange={handleChange}
            expandedSheet={expandedSheet}
            setDraggedSheetId={setDraggedSheetId}
          />
        )}
    </Box>
  );
}

Card.propTypes = {
  employees: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  site: PropTypes.object.isRequired,
  setDraggedSheetId: PropTypes.func,
};
Card.defaultProps = {
  setDraggedSheetId: undefined,
};
export default React.memo(Card);
