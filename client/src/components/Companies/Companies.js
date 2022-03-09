/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Cards from '../Cards/Cards';
import './companies.scss';

function Companies({
  companies,
  handleAssignment,
  isDropable,
  week,
}) {
  return (
    (companies.length
      ? (companies.map(({ id, name, assignments }) => (
        <Box
          key={`company-${id}`}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: 'center' }}
            id={`company-${id}-title`}
            key={`company-${id}-title`}
          >
            {name}
          </Typography>

          {assignments.length
            ? (
              <Cards
                id={`company-${id}-sites`}
                key={`company-${id}-sites`}
                assignments={assignments}
                isDropable={isDropable}
                isMobile={!isDropable}
                handleAssignment={handleAssignment}
                isAdmin
                week={week}
              />
            )
            : (
              <Typography
                id={`company-${id}-nosites`}
                key={`company-${id}-nosites`}
                sx={{ textAlign: 'center' }}
              >
                Aucun planning à afficher.
              </Typography>
            )}
        </Box>
      )))
      : (
        <Typography sx={{ textAlign: 'center' }}>
          Aucune entreprise à afficher.
        </Typography>
      )
    ));
}

Companies.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      assignments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func,
  isDropable: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Companies.defaultProps = {
  handleAssignment: undefined,
};

export default React.memo(Companies);
