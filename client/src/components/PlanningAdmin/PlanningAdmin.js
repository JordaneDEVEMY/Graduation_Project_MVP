import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal } from '@mui/material';
import AssignmentFormContainer from '../../containers/AssignmentFormContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import DraggableAssignments from '../DraggableAssignments/DraggableAssignments';
import Companies from '../Companies/Companies';
import dateFunctions from '../../utils/dateFunctions';
// import useBreakpointDown from '../../hooks/useBreakpointDown';
import './planning_admin.scss';

function PlanningAdmin({
  companies,
  startDate,
}) {
  console.log('start date', startDate);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isMobile = false; // useBreakpointDown();
  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);
  console.log('assignment', assignment, assignment.id, assignment.id !== undefined);
  console.log('modalOpened', modalOpened);
  console.log('isMobile', isMobile);

  const handleAssignment = (result) => {
    setAssignment(result);
    console.log('handleAssignment', result);
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

  // React.useEffect(() => {
  //   const ddd = planningFunctions.setPlanningCards(companies);
  //   console.log(ddd);
  //   setSites(ddd);
  // }, []);

  React.useEffect(() => {
    setModalOpened(assignment.id !== undefined);
  }, [assignment]);

  return (
    <>
      <SearchContainer isAdmin date={startDate} />

      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      {companies.length
        ? !isMobile
          && (
          <DraggableAssignments
            companies={companies}
            handleAssignment={handleAssignment}
            week={currentWeek}
          />
          )
        : (
          <Companies
            companies={companies}
            handleAssignment={handleAssignment}
            isDropable={false}
            isMobile
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
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
