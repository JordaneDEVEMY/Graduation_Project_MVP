/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import SitesList from '../SitesList/SitesList';

function Companies({
  isMobile,
  companies,
  handleAssignment,
  isDropable,
  week,
}) {
  const [brands, setBrands] = React.useState(companies);
  const theme = useTheme();
  console.log('companies', brands);

  React.useEffect(() => {
    setBrands(companies);
  }, [companies]);

  return (
    (brands.length
      ? (brands.map((company, index) => (
        <Box
          key={`company-${company.id}-wrapper`}
          sx={{
            mt: index !== 0 ? theme.spacing(2) : undefined,
          }}
        >
          <Typography
            variant="h2"
            key={`company-${company.id}-title`}
            sx={{
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
              },
            }}
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
                isMobile={isMobile}
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
  isMobile: PropTypes.bool.isRequired,
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
