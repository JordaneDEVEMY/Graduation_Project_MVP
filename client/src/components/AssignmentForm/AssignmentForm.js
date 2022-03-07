import React from 'react';
// import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import { Box } from '@mui/material';
import './assignment_form.scss';

function AssignmentForm({
  week,
  assignment,
}) {
  const fromDate = week.dates[0];
  // const theme = useTheme();

  return (
    <p>
      {`ASSIGNMENT FORM ${fromDate} ${assignment.from}`}
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
  assignment: PropTypes.shape({
    type: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    fromIndex: PropTypes.number.isRequired,
    toIndex: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(AssignmentForm);
