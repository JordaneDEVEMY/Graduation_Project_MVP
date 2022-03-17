/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Alert, Box, Typography } from '@mui/material';
// import SiteAbsences from '../SiteAbsences/SiteAbsences';
import SitesList from '../SitesList/SitesList';

function Companies({
  companies,
  handleAssignment,
  handleSite,
  isDropable,
  isMobile,
  isPast,
  sitesList,
  week,
}) {
  const theme = useTheme();
  const [brands, setBrands] = React.useState(companies);

  React.useEffect(() => {
    setBrands(companies);
  }, [companies]);

  return (
    <Box
      sx={{
        [theme.breakpoints.up('md')]: {
          display: 'inline-flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: theme.spacing(4),
          mb: theme.spacing(2),
        },
      }}
    >
      {brands.map((company, index) => (
        <Box
          key={`company-${company.id}-wrapper`}
          sx={{
            position: 'relative',
            width: `calc(300px + ${theme.spacing(4)})`,
            [theme.breakpoints.down('md')]: {
              mt: index !== 0 ? theme.spacing(4) : undefined,
            },
            [theme.breakpoints.up('md')]: {
              flex: '0 0 auto',
            },
          }}
        >
          <Typography
            variant="h2"
            key={`company-${company.id}-title`}
            sx={{
              textAlign: 'center',
            }}
          >
            {company.name}
            {}
          </Typography>

          {company.sites.length
            ? (
              <SitesList
                company={company}
                handleAssignment={handleAssignment}
                handleSite={handleSite}
                id={`company-${company.id}`}
                isDropable={isDropable}
                isMobile={isMobile}
                isPast={isPast}
                key={`company-${company.id}`}
                sitesList={sitesList.filter((item) => item.company.company_id === company.id)}
                week={week}
              />
            )
            : (
              <Alert
                severity="info"
                key={`empty-company-${company.id}`}
                sx={{
                  mt: theme.spacing(2),
                }}
              >
                Aucun planning à afficher.
              </Alert>
            )}
        </Box>
      ))}
    </Box>
  );
}

Companies.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      sites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func.isRequired,
  handleSite: PropTypes.func.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isPast: PropTypes.bool.isRequired,
  sitesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(Companies);
