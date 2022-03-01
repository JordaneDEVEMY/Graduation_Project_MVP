/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import entreprises from '../../dataTest/entreprises';
import sites from '../../dataTest/sites';
import './searchcontainer.scss';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete';
import SelectWeek from '../SelectWeek/SelectWeek';

function SearchContainer() {
  const theme = useTheme();

  return (
    <Box
      maxWidth="600px"
      margin="0 auto"
      sx={{
        padding: theme.spacing(1),
        background: theme.palette.background.component,
      }}
    >
      <SelectWeek />
      <SearchAutocomplete sites={sites} entreprises={entreprises} />
    </Box>
  );
}

SearchContainer.propTypes = {
};
SearchContainer.defaultProps = {
};
export default React.memo(SearchContainer);
