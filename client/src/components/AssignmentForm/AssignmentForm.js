/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import './assignment_form.scss';

function AssignmentForm({
  assignment,
}, ref) {
  // const theme = useTheme();
  const { site } = assignment;
  console.log('site', site);
  return (
    <Box ref={ref}>
      {`${site.name}`}
    </Box>
  );
}

// AssignmentForm.propTypes = {
//   site: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default React.memo(React.forwardRef(AssignmentForm));
