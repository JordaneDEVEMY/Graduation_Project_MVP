/* eslint-disable max-len */
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Grid, Button, IconButton, MenuItem, Select,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import './selectweek.scss';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';

function SelectWeek({
  date,
  isAdmin,
  userId,
}) {
  const theme = useTheme();
  const week = dateFunctions.getWeek(date);
  const currentYear = dateFunctions.getDate(week.current.dates[0]).year();
  const maxOldYear = new Date().getFullYear() - 10;
  const disabledPrev = isAdmin
    ? (currentYear === maxOldYear) && (week.current.num === 1)
    : (week.current.num !== dateFunctions.getDate().isoWeek() + 1);
  const disabledNext = isAdmin
    ? false
    : (week.current.num === dateFunctions.getDate().isoWeek() + 1);
  const path = isAdmin ? '/admins/planning/' : `/users/${userId}/planning`;

  const handleCurrentWeek = (dateStart) => {
    const slug = planningFunctions.getWeekSlugFromDate(dateStart);
    return (<Navigate to={`${path}/${slug}`} />);
  };

  /**
   * Get last ten years
   * @returns {array} List of MenuItem components
   */
  const getYears = () => {
    let y = new Date().getFullYear();
    const years = [];
    while (y >= maxOldYear) {
      years.push(<MenuItem key={y} value={y}>{y}</MenuItem>);
      y -= 1;
    }

    return years;
  };

  /**
   * Get weeks of select year
   * @returns {array} List of MenuItem components
   */
  const getWeeks = () => {
    const nbWeeks = dateFunctions.getDate(`${currentYear}-01-01`).isoWeeksInYear();
    const weeks = [];
    let i = 1;
    while (i <= nbWeeks) {
      const weekNum = `${i < 10 ? '0' : ''}${i}`;
      const period = dateFunctions.getWeekPeriod(currentYear, i);
      const slug = `${currentYear}-${weekNum}`;
      weeks.push(
        <MenuItem
          key={i}
          value={i}
          component={Link}
          to={`${path}/${slug}`}
        >
          {`S${weekNum} - ${period}`}

        </MenuItem>,
      );
      i += 1;
    }

    return isAdmin ? weeks : weeks.slice(week.current.num - 1, week.current.num + 1);
  };

  const handleWeekSelect = (event) => {
    const selectedWeek = event.target.value;
    let weekMonday;

    if (selectedWeek >= week.current.num) {
      weekMonday = dateFunctions.getDate(week.current.dates[0]).add(selectedWeek - week.current.num, 'week').format('YYYY-MM-DD');
    } else {
      weekMonday = dateFunctions.getDate(week.current.dates[0]).subtract(week.current.num - selectedWeek, 'week').format('YYYY-MM-DD');
    }

    handleCurrentWeek(weekMonday);
  };

  const handleYearSelect = (event) => {
    const selectedYear = event.target.value;
    const firstMonday = dateFunctions.getDate(week.current.dates[0]).subtract(currentYear - selectedYear, 'year').format('YYYY-MM-DD');

    handleCurrentWeek(firstMonday);
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={1}
    >
      {isAdmin && (
        <Grid item xs="auto">
          <Button
            component={Link}
            to={`${path}/${planningFunctions.getCurrentWeekSlug()}`}
            variant="outlined"
            size="small"
            title="Semaine en cours"
            disabled={week.current.num === dateFunctions.getDate().isoWeek()}
          >
            Auj.
          </Button>
        </Grid>
      )}
      <Grid item sm="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <IconButton
          component={Link}
          to={`${path}/${planningFunctions.getWeekSlugFromDate(week.prev.dates[0])}`}
          title={`Semaine ${week.next.num}`}
          disabled={disabledPrev}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Grid>
      {isAdmin && (
        <Grid item xs sm="auto">
          <Select
            size="small"
            value={currentYear}
            onChange={handleYearSelect}
            sx={{
              width: '100%',
              [theme.breakpoints.up('sm')]: {
                width: '6rem',
              },
            }}
          >
            {getYears()}
          </Select>
        </Grid>
      )}
      <Grid item xs>
        <Select
          size="small"
          sx={{ width: '100%' }}
          value={week.current.num}
          onChange={handleWeekSelect}
        >
          {getWeeks()}
        </Select>
      </Grid>
      <Grid item xs="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <IconButton
          component={Link}
          to={`${path}/${planningFunctions.getWeekSlugFromDate(week.next.dates[0])}`}
          title={`Semaine ${week.next.num}`}
          disabled={disabledNext}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

SelectWeek.propTypes = {
  // handleCurrentWeek: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  userId: PropTypes.number,
};

SelectWeek.defaultProps = {
  userId: undefined,
};

export default React.memo(SelectWeek);
