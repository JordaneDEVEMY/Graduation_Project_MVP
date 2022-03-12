/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import SitesList from '../SitesList/SitesList';

function Companies({
  companies,
  handleAssignment,
  isDropable,
  week,
}) {
  console.log('company', companies);

  return (
    (companies.length
      ? (companies.map((company) => (
        <Box
          key={`company-${company.id}-wrapper`}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: 'center' }}
            key={`company-${company.id}-title`}
          >
            {company.name}
          </Typography>

          {company.sites.length
            ? (
              <SitesList
                company={company}
                handleAssignment={handleAssignment}
                id={`company-${company.id}`}
                isDropable={isDropable}
                isMobile={!isDropable}
                key={`company-${company.id}`}
                week={week}
              />
            )
            : (
              <Typography
                id={`empty-company-${company.id}`}
                key={`empty-company-${company.id}`}
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
      sites: PropTypes.arrayOf(
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
