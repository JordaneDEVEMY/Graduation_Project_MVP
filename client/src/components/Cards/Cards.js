/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, useMediaQuery } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import './cards.scss';

function Cards({
  assignements,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#2196f3',
    },
    {
      id: 3,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#4caf50',
    },
    {
      id: 4,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ffeb3b',
    },
    {
      id: 5,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ff9800',
    },
    {
      id: 6,
      firstname: 'Bernard',
      lastname: 'De La Villardière',
      email: 'bernard@free.fr',
      avatar: 'string',
      role_application: 'string',
      color: '#ff9800',
    },
  ];
  assignements.forEach((assignement) => {
    assignement.employees = employees;
  });

  return (
    isMobile ? (
      <Carousel assignements={assignements} />
    )
      : (
        <Box
          sx={{
            overflowX: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              flexWrap: 'nowrap',
              justifyContent: 'center',
            }}
          >
            {assignements.map((assignement) => (
              <Card key={assignement.id} isMobile={isMobile} {...assignement} />
            ))}
          </Box>
        </Box>
      )
  );
}

Cards.propTypes = {
  assignements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default React.memo(Cards);
