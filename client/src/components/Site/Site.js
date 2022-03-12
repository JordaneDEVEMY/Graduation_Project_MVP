/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Droppable } from 'react-beautiful-dnd';
import SiteHeader from '../SiteHeader/SiteHeader';
import AssignmentsList from '../AssignmentsList/AssignmentsList';

function Site({
  assignments,
  handleAssignment,
  id,
  isDropable,
  isMobile,
  name,
  week,
}) {
  const theme = useTheme();

  console.log(`site : ${name}`, assignments);

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
      id={`site-${id}`}
    >
      <SiteHeader
        id={id}
        name={name}
      />
      {assignments.length
        && isDropable
        ? (
          <Droppable droppableId={`site-${id}`} type="SITE">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <AssignmentsList
                  assignments={assignments}
                  expandedSheet={expandedSheet}
                  handleAssignment={handleAssignment}
                  handleCollapse={handleCollapse}
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
          <AssignmentsList
            assignments={assignments}
            expandedSheet={expandedSheet}
            handleAssignment={handleAssignment}
            handleCollapse={handleCollapse}
            isDraggable={false}
            isMobile={isMobile}
            week={week}
          />
        )}
    </Box>
  );
}

Site.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      employee: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        lastname: PropTypes.string.isRequired,
      }).isRequired,
      ending_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      position: PropTypes.number.isRequired,
      starting_date: PropTypes.string.isRequired,
      visibility: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Site.defaultProps = {
  handleAssignment: undefined,
};

export default React.memo(Site);
