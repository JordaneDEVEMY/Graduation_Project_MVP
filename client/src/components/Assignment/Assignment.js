/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PropTypes from 'prop-types';
import dateFunctions from '../../utils/dateFunctions';
import './sheet.scss';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'none',
  color: theme.palette.sheet.main,
}));

function Assignment({
  color,
  employee,
  ending_date,
  expandedSheet,
  handleAssignment,
  handleCollapse,
  isDraggable,
  id,
  index,
  starting_date,
  visibility,
  week,
}) {
  const theme = useTheme();
  const firstDayofWeek = dateFunctions.getDate(week.dates[0]).format('YYYY-MM-DD');
  const lastDayofWeek = dateFunctions.getDate(week.dates[4]).format('YYYY-MM-DD');
  const startOnMonday = dateFunctions.getDate(starting_date).format('YYYY-MM-DD') === firstDayofWeek;
  const finishOnFriday = dateFunctions.getDate(ending_date).format('YYYY-MM-DD') === lastDayofWeek;

  return (
    <Accordion
      expanded={expandedSheet === `panel${index}`}
      onChange={handleCollapse(`panel${index}`)}
      id={`assignment-${id}`}
      sx={{
        borderTop: '1px solid rgb(0 0 0 / 10%)',
        background: color,
        clipPath: 'path(\'M0,0v48.1h13l0,0c0.2,0,0.3,0,0.5,0C22.1,48.1,29,55,29,63.6c0,0.2,0,0.3,0,0.5l0,0l-1,347.8c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0,0.9l0.1,0c0.5,7.2,6.6,13,13.9,13h216c7.4,0,13.4-5.7,13.9-13l0.1,0l0-0.9c0,0,0,0,0-0.1c0,0,0,0,0-0.1l-1-347.8l0,0c0-0.2,0-0.3,0-0.5c0-8.6,6.9-15.5,15.5-15.5c0.2,0,0.3,0,0.5,0l0,0h13V0H0z\')',
      }}
    >
      <AccordionSummary
        aria-controls={`panel${index}-content`}
        sx={{
          height: 50,
          alignItems: 'center',
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: 'Sriracha',
            fontSize: '1rem',
            color: theme.palette.sheet.main,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {`${employee.firstname} ${employee.lastname}`}
        </Typography>

        {(!startOnMonday || !finishOnFriday)
          && (
          <Typography
            component="small"
            sx={{
              ml: 'auto',
              fontSize: '.75rem',
              lineHeight: '1.5rem',
            }}
          >
            {`${dateFunctions.getDate(starting_date).format('DD-MM')} 
            au ${dateFunctions.getDate(ending_date).format('DD-MM')}`}
          </Typography>
          )}

        {isDraggable
          ? (
            <DragIndicatorIcon
              fontSize="small"
              color="sheet"
              sx={{
                ml: (!startOnMonday || !finishOnFriday) ? undefined : 'auto',
                opacity: '.3',
                '&:hover, &:focus': {
                  opacity: '1',
                },
              }}
            />
          )
          : (handleAssignment
              && (
              <Box
                onClick={handleAssignment}
              >
                UP
              </Box>
              ))}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: '0 40px 10px',
        }}
      >
        <Grid container spacing={1} mt={0}>
          <Grid item xs="auto">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs>
            <Typography
              component="p"
            >
              <strong>
                Visibility:
                {' '}
                {`${visibility ? 'oui' : 'non'}`}
              </strong>
            </Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

Assignment.propTypes = {
  color: PropTypes.string.isRequired,
  employee: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
  ending_date: PropTypes.string.isRequired,
  expandedSheet: PropTypes.string.isRequired,
  handleAssignment: PropTypes.func,
  handleCollapse: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  isDraggable: PropTypes.bool.isRequired,
  starting_date: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Assignment.defaultProps = {
  handleAssignment: undefined,
};
export default React.memo(Assignment);
