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
  assignements,
  isAdmin,
  week,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [modalOpened, setModalOpened] = React.useState(false);

  const handleModal = () => {
    setModalOpened((stateModal) => !stateModal);
  };

  // TODO SET EMPLOYEES
  const employees = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'string@alo.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#f44336',
    },
    {
      id: 2,
      firstname: 'Alain',
      lastname: 'Benet',
      email: 'benet.al@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#2196f3',
    },
    {
      id: 3,
      firstname: 'Bernard',
      lastname: 'De La Vitre arrière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#4caf50',
    },
    {
      id: 4,
      firstname: 'Yves',
      lastname: 'Jacquard',
      email: 'jacquard@orange.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ffeb3b',
    },
    {
      id: 5,
      firstname: 'Christine',
      lastname: 'Pinson',
      email: 'chrispinson@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ff9800',
    },
    {
      id: 6,
      firstname: 'William',
      lastname: 'Guiscard',
      email: 'guiscard.william@sfr.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#8e00ff',
    },
  ];
  assignements.forEach((assignement) => {
    assignement.employees = employees;
  });

  return (
    <>
      {isMobile
        ? <Carousel assignements={assignements} handleModal={handleModal} />
        : <CardsWrapper assignements={assignements} handleModal={handleModal} />}

      {!isAdmin
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
          <AssignmentForm week={week} />
        </Modal>
        )}
    </>
  );
}

Cards.propTypes = {
  assignements: PropTypes.arrayOf(
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
