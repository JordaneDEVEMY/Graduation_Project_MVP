/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
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

  const handleCurrentWeek = (dateStart) => {
    const slug = planningFunctions.getSlugFromDate(dateStart);
    console.log(slug);
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
      const period = dateFunctions.getWeekPeriod(currentYear, i);
      weeks.push(<MenuItem key={i} value={i}>{`S${i < 10 ? '0' : ''}${i} - ${period}`}</MenuItem>);
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

  const handlePrevButton = () => {
    const lastMonday = week.prev.dates[0];
    handleCurrentWeek(lastMonday);
  };

  const handleRefreshButton = () => {
    handleCurrentWeek(date);
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
            variant="outlined"
            size="small"
            onClick={handleRefreshButton}
            title="Semaine en cours"
            disabled={week.current.num === dateFunctions.getDate().isoWeek()}
          >
            Auj.
          </Button>
        </Grid>
      )}
      <Grid item sm="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <IconButton
          disabled={disabledPrev}
          onClick={handlePrevButton}
          title={`Semaine ${week.prev.num}`}
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
          to={`/admins/planning/${planningFunctions.getSlugFromDate(week.next.dates[0])}`}
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
};
export default React.memo(SelectWeek);
