/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Site from '../Site/Site';
import Carousel from '../Carousel/Carousel';

function SitesList({
  company,
  handleAssignment,
  isDropable,
  isMobile,
  week,
}) {
  const theme = useTheme();
  const { id, sites } = company;

  return (
    isMobile
      ? (
        <Carousel
          handleAssignment={handleAssignment}
          id={`company-${id}-sites`}
          sites={sites}
          key={`carousel-${id}`}
          week={week}
        />
      )
      : (
        <Box
          id={`company-${id}-sites`}
          sx={{
            display: 'flex',
            gap: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
              flexDirection: 'column',
            },
          }}
        >
          {sites.map((site) => (
            <Site
              {...site}
              handleAssignment={handleAssignment}
              isAbsence={company.id === 0}
              isDropable={isDropable}
              isMobile={false}
              key={site.id}
              week={week}
            />
          ))}
        </Box>
      )
  );
}

SitesList.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        assignments: PropTypes.arrayOf(
          PropTypes.shape({
            color: PropTypes.string.isRequired,
            employee: PropTypes.shape({
              firstname: PropTypes.string.isRequired,
              id: PropTypes.number.isRequired,
              lastname: PropTypes.string.isRequired,
            }).isRequired,
            ending_date: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            position: PropTypes.number.isRequired,
            starting_date: PropTypes.string.isRequired,
            visibility: PropTypes.bool.isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
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

SitesList.defaultProps = {
  handleAssignment: undefined,
};

export default React.memo(SitesList);
