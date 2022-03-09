/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Modal, useMediaQuery } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import CardsWrapper from '../CardsWrapper/CardsWrapper';
import AssignmentForm from '../AssignmentForm/AssignmentForm';
import './cards.scss';

function Cards({
  assignments,
  isAdmin,
  week,
}) {
  console.log('CARDS');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [assignment, setAssignment] = React.useState({});
  const [modalOpened, setModalOpened] = React.useState(false);

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
    setModalOpened(true);
    console.log('update assignement', assignment);
  }, [assignment]);

  return (
    <>
      {isMobile
        ? (
          <Carousel
            assignments={assignments}
            handleAssignment={setAssignment}
            isAdmin={isAdmin}
          />
        )
        : (
          <CardsWrapper
            assignments={assignments}
            handleAssignment={setAssignment}
            isAdmin={isAdmin}
          />
        )}

      {isAdmin
        && (
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
        )}
    </>
  );
}

Cards.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isAdmin: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(Cards);
