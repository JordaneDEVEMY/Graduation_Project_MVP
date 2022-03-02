/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import entreprises from '../../dataTest/entreprises';
import sites from '../../dataTest/sites';
import './searchcontainer.scss';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete';
import SelectWeek from '../SelectWeek/SelectWeek';

function SearchContainer({
  isAdmin,
}) {
  const theme = useTheme();

  console.log(`uuuu${theme.typography.fontSize}`);

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: `0 auto ${theme.spacing(2)}`,
        padding: theme.spacing(1),
        background: theme.palette.background.component,
      }}
    >
      <SelectWeek isAdmin={isAdmin} />
      {isAdmin && (
        <SearchAutocomplete sites={sites} entreprises={entreprises} />
      )}
    </Box>
  );
}

SearchContainer.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default React.memo(SearchContainer);
