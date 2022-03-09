/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Cards from '../Cards/Cards';
import './companies.scss';

function Companies({
  cards,
  companies,
  handleAssignment,
  isDropable,
  week,
}) {
  // sort cards by company
  const companyCards = {};
  companies.forEach((company) => {
    companyCards[company.id] = [];
    company.assignments.forEach((assignment) => {
      companyCards[company.id].push({
        ...assignment,
        assignments: cards[`card-${assignment.id}`],
      });
    });
  });

  return (
    (companies.length
      ? (companies.map(({ id, name }) => (
        <Box
          key={`company-${id}-box`}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: 'center' }}
            key={`company-${id}-title`}
          >
            {name}
          </Typography>

          {companyCards[id].length
            ? (
              <Cards
                assignments={companyCards[id]}
                id={`company-${id}-sites`}
                key={`company-${id}-sites`}
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
  cards: PropTypes.shape().isRequired,
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
