import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Modal, useMediaQuery } from '@mui/material';
import AssignmentForm from '../AssignmentForm/AssignmentForm';
import SearchContainer from '../SearchContainer/SearchContainer';
import CardsDraggable from '../CardsDraggable/CardsDraggable';
import Companies from '../Companies/Companies';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import './planning_admin.scss';

function PlanningAdmin({
  handleStartDate,
  planning,
  startDate,
}) {
  const companies = planningFunctions.adminPlanningToCards(planning);
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // set an object of all cards
  const cards = {};
  companies.forEach(({ assignments }) => {
    assignments.forEach((assignment) => {
      const { id, colleagues } = assignment;
      cards[`card-${id}`] = colleagues;
    });
  });

  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);

  console.log('planning', planning);
  console.log('startDate', startDate);
  console.log('companies', companies);
  console.log('cards', cards);

  const handleAssignment = (result) => {
    console.log('HANDLE ASSIGNMENT', result);
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

  // React.useEffect(() => {
  //   // setModalOpened(true);
  //   console.log('update assignement', assignment);
  // }, [assignment]);

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

      <Modal
        sx={{
          width: '90vw',
          maxWidth: '30rem',
          mx: 'auto',
          mt: '25vh',
        }}
        open={modalOpened}
        onClose={handleModal}
      >
        <AssignmentForm week={week} assignment={assignment} />
      </Modal>
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
