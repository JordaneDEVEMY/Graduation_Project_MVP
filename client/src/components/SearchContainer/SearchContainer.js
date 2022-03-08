/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import './searchcontainer.scss';
import SearchAutocompleteContainer from '../../containers/SearchAutocompleteContainer';
import SelectWeek from '../SelectWeek/SelectWeek';

function SearchContainer({
  date,
  handleCurrentWeek,
  isAdmin,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: `0 auto ${theme.spacing(2)}`,
        padding: theme.spacing(1),
        background: theme.palette.background.component,
      }}
    >
      <SelectWeek date={date} isAdmin={isAdmin} handleCurrentWeek={handleCurrentWeek} />
      {isAdmin && (
        <SearchAutocompleteContainer />
      )}
    </Box>
  );
}

SearchContainer.propTypes = {
  date: PropTypes.string.isRequired,
  handleCurrentWeek: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(SearchContainer);
