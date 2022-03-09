/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Cards from '../Cards/Cards';
import './companies.scss';

function Companies({
  assignments,
  companies,
  handleAssignment,
  isDropable,
  week,
}) {
  // sort assignements by company
  const companiesAssignments = {};
  companies.forEach(({ id: companyId, assignments: companyAssignments }) => {
    if (assignments) {
      const result = [];
      companyAssignments.forEach((item) => {
        result.push({
          ...item,
          assignments: assignments[`card-${item.id}`],
        });
      });
      companiesAssignments[companyId] = result;
    } else {
      companiesAssignments[companyId] = companyAssignments;
    }
  });
  console.log('companiesAssignments', companiesAssignments);

  return (
    (companies.length
      ? (companies.map(({ id, name }) => (
        <>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center' }}
            id={`company-${id}-title`}
            key={`company-${id}-title`}
          >
            {name}
          </Typography>

          {companiesAssignments[id].length
            ? (
              <Cards
                assignments={companiesAssignments[id]}
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
        </>
      )))
      : (
        <Typography sx={{ textAlign: 'center' }}>
          Aucune entreprise à afficher.
        </Typography>
      )
    ));
}

Companies.propTypes = {
  assignments: PropTypes.shape(),
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
  assignments: undefined,
  handleAssignment: undefined,
};

export default React.memo(Companies);
