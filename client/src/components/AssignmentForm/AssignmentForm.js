/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box, Button, Checkbox, FormGroup, FormControlLabel, Grid, TextField, Typography,
} from '@mui/material';
import dateFunctions from '../../utils/dateFunctions';
import './assignment_form.scss';

function AssignmentForm({
  assignment,
  handleSubmit,
}, ref) {
  const theme = useTheme();
  const { firstname, lastname, site } = assignment;

  const [starting_date, setStartingDate] = React.useState(assignment.starting_date);
  const [ending_date, setEndingDate] = React.useState(assignment.ending_date);
  const [color, setColor] = React.useState(assignment.color);
  const [visibility, setVisibility] = React.useState(true);

  const handleChange = (event, fieldLabel) => {
    const { value } = event.target;

    switch (fieldLabel) {
      case 'color':
        setColor(value);
        break;
      case 'starting_date':
        setStartingDate(value);
        break;
      case 'ending_date':
        setEndingDate(value);
        break;
      case 'visibility':
        setVisibility((prevVisibility) => !prevVisibility);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      ...assignment,
      color,
      visibility,
      starting_date,
      ending_date,
    };

    handleSubmit(data);
  };

  return (
    <Box
      component="form"
      ref={ref}
      sx={{
        bgcolor: theme.palette.background.component,
      }}
      onSubmit={handleSubmitForm}
      tabIndex="-1"
    >
      <Box
        sx={{
          padding: {
            sx: theme.spacing(1),
            md: theme.spacing(2),
          },
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          {`${site.name}`}
        </Typography>

        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {`Employé : ${firstname} ${lastname}`}
        </Typography>

        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <TextField
              id="field-startingDate"
              label="Du"
              value={dateFunctions.getDate(starting_date).format('DD-MM-YYYY')}
              onChange={(e) => handleChange(e, 'starting_date')}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="field-endingDate"
              label="Au"
              value={dateFunctions.getDate(ending_date).format('DD-MM-YYYY')}
              onChange={(e) => handleChange(e, 'ending_date')}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="field-color"
              label="Color"
              value={color}
              onChange={(e) => handleChange(e, 'color')}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={(
                  <Checkbox
                    defaultChecked={visibility}
                    onChange={(e) => handleChange(e, 'visibility')}
                  />
              )}
                label="Visible"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderTop: 1,
          borderTopColor: theme.palette.divider,
          textAlign: 'center',
          padding: {
            sx: theme.spacing(1),
            md: theme.spacing(2),
          },
        }}
      >
        <Button
          type="submit"
          variant="contained"
        >
          Valider
        </Button>
      </Box>
    </Box>
  );
}

// AssignmentForm.propTypes = {
//   site: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   starting_date: PropTypes.string.isRequired,
// };

export default React.memo(React.forwardRef(AssignmentForm));
