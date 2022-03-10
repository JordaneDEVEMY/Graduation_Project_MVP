import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import './assignment_form.scss';

function AssignmentForm({
  firstname,
  lastname,
}) {
  const theme = useTheme();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        bgcolor: theme.palette.background.component,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={firstname}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={lastname}
        />
      </div>
    </Box>
  );
}

AssignmentForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default React.memo(AssignmentForm);
