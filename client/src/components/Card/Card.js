/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Droppable } from 'react-beautiful-dnd';
import CardHeader from '../CardHeader/CardHeader';
import SheetUser from '../SheetUser/SheetUser';
import SheetList from '../SheetList/SheetList';

import './card.scss';

function Card({
  employees,
  ending_date,
  handleAssignment,
  id,
  isAdmin,
  isDropable,
  isMobile,
  site,
  starting_date,
  user,
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
      {user
      && (
      <SheetUser
        ending_date={ending_date}
        user={user}
        starting_date={starting_date}
        week={week}
      />
      )}
      {employees.length
        && isDropable
        ? (
          <Droppable droppableId={`card-${id}`} type="SITES">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <SheetList
                  employees={employees}
                  expandedSheet={expandedSheet}
                  handleAssignment={handleAssignment}
                  handleCollapse={handleCollapse}
                  isAdmin
                  isDraggable
                  isMobile={false}
                  week={week}
                />

                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        )
        : (
          <SheetList
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
  ending_date: PropTypes.string,
  handleAssignment: PropTypes.func,
  id: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  site: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  starting_date: PropTypes.string,
  user: PropTypes.shape({
    assignments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Card.defaultProps = {
  ending_date: undefined,
  handleAssignment: undefined,
  starting_date: undefined,
  user: undefined,
};

export default React.memo(Card);
