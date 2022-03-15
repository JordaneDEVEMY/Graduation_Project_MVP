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
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import assignmentBg from '../../Assets/images/sheet-bg.png';

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

  /**
   * add site assignment
   * @param {string} accordionId accordion id
   * @returns {void} call setAssignment
   */
  const handleAddAssignment = () => {
    const newAssignement = planningFunctions.createAssignment();
    const starting_date = dateFunctions.getDate().format('YYYY-MM-DD');
    const ending_date = dateFunctions.getDate(week.dates[4]).format('YYYY-MM-DD');

    handleAssignment({
      ...newAssignement,
      ending_date,
      starting_date,
      site: {
        id,
        name,
      },
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '.25rem',
        color: theme.palette.text.primary,
        bgcolor: `${theme.palette.background.component}`,
        p: theme.spacing(2),
        width: `calc(300px + ${theme.spacing(4)})`,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
          flex: '0 0 auto',
        },
      }}
      id={`site-${id}`}
    >
      <SiteHeader
        name={name}
        handleAddAssignment={handleAddAssignment}
      />
      {assignments.length
          && isDropable
        ? (
          <Droppable droppableId={`site-${id}`} type="SITE">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  pb: '50px',
                  flexGrow: '1',
                  background: `url('${assignmentBg}') repeat-y center bottom`,
                }}
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
          <Box
            sx={{
              pb: '50px',
              flexGrow: '1',
              background: `url('${assignmentBg}') repeat-y center bottom`,
            }}
          >
            <AssignmentsList
              assignments={assignments}
              expandedSheet={expandedSheet}
              handleAssignment={handleAssignment}
              handleCollapse={handleCollapse}
              isDraggable={false}
              isMobile={isMobile}
              week={week}
            />
          </Box>
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
