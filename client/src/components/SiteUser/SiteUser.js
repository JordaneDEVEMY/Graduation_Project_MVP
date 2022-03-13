/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SiteHeader from '../SiteHeader/SiteHeader';
import Assignment from '../Assignment/Assignment';
import assignmentBg from '../../Assets/images/sheet-bg.png';
import dateFunctions from '../../utils/dateFunctions';
import useBreakpointDown from '../../hooks/useBreakpointDown';

function SiteUser({
  employees,
  id,
  site,
  startDate,
  user,
}) {
  const theme = useTheme();
  const week = dateFunctions.getWeek(startDate);
  const isMobile = useBreakpointDown();
  const { current: currentWeek } = week;
  const { id: userId } = user;

  // accordion state
  const [expandedSheet, setExpandedSheet] = React.useState('');

  /**
   * set expanded state
   * @param {string} accordionId accordion id
   * @returns {string|boolean} accordion id or false
   */
  const handleCollapse = (accordionId) => (event, isExpanded) => {
    setExpandedSheet(isExpanded ? accordionId : '');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '.25rem',
        color: theme.palette.text.primary,
        bgcolor: `${theme.palette.background.component}`,
        p: theme.spacing(2),
        width: `calc(300px + ${theme.spacing(4)})`,
        overflow: 'hidden',
      }}
      id={`assignment-${id}`}
    >
      <SiteHeader
        name={site.name}
      />
      {employees.length
        && (
          <Box
            sx={{
              pb: '50px',
              flexGrow: '1',
              background: `url('${assignmentBg}') repeat-y center bottom ${theme.spacing(2)}`,
            }}
          >
            {employees.map((employee, index) => (
              <Assignment
                color={employee.color || theme.palette.warning.main}
                employee={employee}
                ending_date={employee.ending_date}
                expandedSheet={expandedSheet}
                handleCollapse={handleCollapse}
                id={employee.id}
                index={index}
                key={`employee-${employee.id}`}
                isDraggable={false}
                isMobile={isMobile}
                starting_date={employee.starting_date}
                userId={userId}
                visibility
                week={currentWeek}
              />
            ))}
          </Box>
        )}
    </Box>
  );
}

SiteUser.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      ending_date: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lastname: PropTypes.string.isRequired,
      mobile_number: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      starting_date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  id: PropTypes.number.isRequired,
  site: PropTypes.shape({
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manager_name: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    zip_code: PropTypes.number.isRequired,
  }).isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(SiteUser);
