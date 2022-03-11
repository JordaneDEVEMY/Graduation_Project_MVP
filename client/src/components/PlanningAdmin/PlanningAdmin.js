/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import React from 'react';
import produce from 'immer';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Modal, useMediaQuery } from '@mui/material';
import AssignmentFormContainer from '../../containers/AssignmentFormContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import CardsDraggable from '../CardsDraggable/CardsDraggable';
import Companies from '../Companies/Companies';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import './planning_admin.scss';

/**
 * receive state and return the new state
 */
const dragReducer = produce((draft, action) => {
  switch (action.type) {
    case 'MOVE': {
      draft[action.from] = draft[action.from] || [];
      draft[action.to] = draft[action.to] || [];
      const [removed] = draft[action.from].splice(action.fromIndex, 1);
      draft[action.to].splice(action.toIndex, 0, removed);
    }
  }
});

function PlanningAdmin({
  handleStartDate,
  planning,
  startDate,
}) {
  console.log('start date from planning admin', startDate);
  console.log('planning from planning admin', planning);

  const companies = planningFunctions.adminPlanningToCards(planning);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // get an object of all cards
  const cards = planningFunctions.setPlanningCards(companies);
  console.log('cards planning admin', cards);

  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);
  // set cards in state
  const [dragState, setDragState] = React.useReducer(dragReducer, cards);

  const handleAssignment = (result) => {
    setAssignment(result);
  };

  const handleModal = () => {
    // force opened state
    setModalOpened((stateModal) => {
      if (stateModal) {
        return true;
      }
      return !stateModal;
    });
  };

  React.useEffect(() => {
    setModalOpened(assignment.site !== undefined);
  }, [dragState]);

  React.useEffect(() => {
    setModalOpened(assignment.site !== undefined);
  }, [assignment]);

  return (
    <>
      <SearchContainer isAdmin date={startDate} handleCurrentWeek={handleStartDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {companies.length
        ? !isMobile
          && (
          <CardsDraggable
            cards={cards}
            companies={companies}
            handleAssignment={handleAssignment}
            week={currentWeek}
            setDragState={setDragState}
          />
          )
        : (
          <Companies
            cards={cards}
            companies={companies}
            handleAssignment={handleAssignment}
            isDropable={false}
            week={currentWeek}
          />
        )}

      {modalOpened
      && (
      <Modal
        sx={{
          width: '90vw',
          maxWidth: '30rem',
          mx: 'auto',
          mt: '25vh',
        }}
        open
        onClose={handleModal}
      >
        <AssignmentFormContainer
          assignment={assignment}
          setModalOpened={setModalOpened}
        />
      </Modal>
      )}
    </>
  );
}

PlanningAdmin.propTypes = {
  handleStartDate: PropTypes.func.isRequired,
  planning: PropTypes.arrayOf(
    PropTypes.shape({
      company_name: PropTypes.string.isRequired,
      sites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          site_name: PropTypes.string.isRequired,
          assignment: PropTypes.shape({
            id: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
