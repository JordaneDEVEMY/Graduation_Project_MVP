/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete,
  Box, Button,
  Checkbox,
  FormGroup,
  FormControlLabel, Grid, MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField, Typography,
} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import dateFunctions from '../../utils/dateFunctions';
import './assignment_form.scss';

function AssignmentForm({
  absencesList,
  assignment,
  employeesList,
  setModalOpened,
  handleCancel,
  handleSubmit,
}, ref) {
  console.log('absencesList', absencesList);
  const theme = useTheme();
  const method = assignment.id ? 'PATCH' : 'POST';
  const { absence_id, employee_id, site } = assignment;
  const isAbsence = site.id === 0;

  // set colors list
  const colorsList = [
    ['#f44336', 'Rouge'],
    ['#e91e63', 'Rose'],
    ['#9c27b0', 'Violette'],
    ['#2196f3', 'Bleue'],
    ['#00bcd4', 'Cyan'],
    ['#009688', 'Turquoise'],
    ['#4caf50', 'Verte'],
    ['#cddc39', 'Verte claire'],
    ['#ffeb3b', 'Jaune'],
    ['#ff9800', 'Orange'],
  ];
  // add assignment color in colors list if not includes
  if (assignment.color) {
    const isFinded = colorsList.filter(([code]) => code === assignment.color);
    if (isFinded.length === 0) {
      colorsList.push([assignment.color, 'personnalisée']);
    }
  }

  const [employee, setEmployee] = React.useState(
    employee_id === null
      ? employeesList[0]
      : employeesList.filter((item) => item.id === employee_id)[0],
  );
  const [absence, setAbsence] = React.useState(
    absence_id === null
      ? absencesList[0]
      : absencesList.filter((item) => item.id === absence_id)[0],
  );
  console.log('employee', employee);
  console.log('absence', absence);
  const [starting_date, setStartingDate] = React.useState(assignment.starting_date);
  const [ending_date, setEndingDate] = React.useState(assignment.ending_date);
  const [color, setColor] = React.useState(assignment.color || colorsList[0][0]);
  const [visibility, setVisibility] = React.useState(true);

  const handleChange = (event, fieldLabel) => {
    const { value } = event.target;

    switch (fieldLabel) {
      case 'starting_date':
        setStartingDate(value);
        break;
      case 'ending_date':
        setEndingDate(value);
        break;
      default:
        break;
    }
  };

  const handleCancelForm = () => {
    setModalOpened(false);
    handleCancel();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      ...assignment,
      absence_id: isAbsence ? absence.id : null,
      site_id: isAbsence ? null : assignment.site.id,
      color,
      method,
      visibility,
      starting_date,
      ending_date,
      employee_id: employee.id,
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

        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Autocomplete
              value={employee}
              getOptionLabel={(option) => `${option.firstname} ${option.lastname}`}
              onChange={(_event, newValue) => {
                setEmployee(newValue);
              }}
              disabled={isAbsence}
              options={employeesList}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField {...params} label="Employé" required />
              )}
            />
          </Grid>

          {isAbsence
            && (
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="absence-label">{'Motif de l\'absence'}</InputLabel>
                  <Select
                    labelId="absence-label"
                    id="field-absence"
                    value={absence.id}
                    label="Motif de l'absence"
                    fullWidth
                    onChange={(_event, newValue) => {
                      console.log(newValue);
                      const selected = absencesList.filter((item) => item.id === newValue.props.value)[0];
                      setAbsence(selected);
                    }}
                  >
                    {absencesList.map((a) => (
                      <MenuItem
                        key={a.id}
                        value={a.id}
                      >
                        {a.reason}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}
          <Grid item xs={6}>
            <TextField
              id="field-startingDate"
              label="Du"
              fullWidth
              required
              value={dateFunctions.getDate(starting_date).format('DD-MM-YYYY')}
              onChange={(e) => handleChange(e, 'starting_date')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="field-endingDate"
              label="Au"
              fullWidth
              required
              value={dateFunctions.getDate(ending_date).format('DD-MM-YYYY')}
              onChange={(e) => handleChange(e, 'ending_date')}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="color-label">Couleur de la fiche</InputLabel>
              <Select
                labelId="color-label"
                id="field-color"
                value={color}
                label="Couleur de la fiche"
                fullWidth
                onChange={(_event, newValue) => {
                  setColor(newValue.props.value);
                }}
              >
                {colorsList.map((c) => (
                  <MenuItem
                    key={c[0]}
                    value={c[0]}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <SquareIcon
                      sx={{
                        color: c[0],
                        mr: theme.spacing(1),
                        verticalAlign: 'top',
                      }}
                    />
                    {c[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={visibility}
                    onChange={() => setVisibility((prevVisibility) => !prevVisibility)}
                  />
              )}
                label="Visible par l'employé"
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
        <Grid
          container
          spacing={1}
          sx={{
            textAlign: 'right',
            justifyContent: 'flex-end',
          }}
        >
          <Grid item>
            <Button
              type="submit"
              variant="outlined"
              onClick={handleCancelForm}
              sx={{
                mr: theme.spacing(1),
              }}
            >
              Annuler
            </Button>
          </Grid>
          {' '}
          <Grid item>
            <Button
              type="submit"
              variant="contained"
            >
              Valider
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default React.memo(React.forwardRef(AssignmentForm));
