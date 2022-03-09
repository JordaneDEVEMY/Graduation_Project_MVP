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
  handleAssignment,
  id,
  isAdmin,
  isDropable,
  isMobile,
  site,
  week,
}) {
  const theme = useTheme();

  // accordion state
  const [expandedSheet, setExpandedSheet] = React.useState('');

  /**
   * set expanded state
   * @param {string} accordionId accordion id
   * @returns {string|boolean} accordion id or false
   */
  const handleCollapse = (accordionId) => (event, isExpanded) => {
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
      {(isDropable)
        ? (
          <SheetListDroppable
            cardId={id}
          >
            <SheetList
              cardId={id}
              employees={employees}
              expandedSheet={expandedSheet}
              handleAssignment={handleAssignment}
              handleCollapse={handleCollapse}
              isAdmin
              isDraggable
              isMobile={false}
              week={week}
            />
          </SheetListDroppable>
        )
        : (
          <SheetList
            cardId={id}
            employees={employees}
            expandedSheet={expandedSheet}
            handleAssignment={handleAssignment}
            handleCollapse={handleCollapse}
            isAdmin={isAdmin}
            isDraggable={false}
            isMobile={isMobile}
            week={week}
          />
        )}
    </Box>
  );
}

Card.propTypes = {
  employees: PropTypes.array.isRequired,
  handleAssignment: PropTypes.func,
  id: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  site: PropTypes.object.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Card.defaultProps = {
  handleAssignment: undefined,
};

export default React.memo(Card);
