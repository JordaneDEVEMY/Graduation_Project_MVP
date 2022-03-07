import React from 'react';
// import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import { Box } from '@mui/material';
import './assignment_form.scss';

function AssignmentForm({
  week,
}) {
  const fromDate = week.dates[0];
  // const theme = useTheme();

  return (
    <p>
      {`ASSIGNMENT FORM ${fromDate}`}
    </p>
  );
}

AssignmentForm.propTypes = {
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(AssignmentForm);
