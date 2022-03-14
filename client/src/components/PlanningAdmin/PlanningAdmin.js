import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal } from '@mui/material';
import AssignmentFormContainer from '../../containers/AssignmentFormContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import DraggableAssignments from '../DraggableAssignments/DraggableAssignments';
import Companies from '../Companies/Companies';
import dateFunctions from '../../utils/dateFunctions';
import useBreakpointDown from '../../hooks/useBreakpointDown';
import './planning_admin.scss';

function PlanningAdmin({
  absences,
  companies,
  startDate,
}) {
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isMobile = useBreakpointDown();
  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);

  const handleAssignment = (result) => {
    setAssignment(result);
    console.log('updateAssignment', result);
  };

  const handleAbsence = (result) => {
    console.log('updateAbsence', result);
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
    setModalOpened(assignment.id !== undefined);
  }, [assignment]);

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      <SearchContainer isAdmin date={startDate} />

      {companies.length
        && !isMobile
        ? (
          <DraggableAssignments
            absences={absences}
            companies={companies}
            handleAbsence={handleAbsence}
            handleAssignment={handleAssignment}
            week={currentWeek}
          />
        )
        : (
          <Companies
            absences={absences}
            companies={companies}
            handleAbsence={handleAbsence}
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
  absences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
