/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete, TextField, InputLabel, Select, MenuItem, Box, FormControl,
} from '@mui/material';
import PropTypes from 'prop-types';

import './searchautocomplete.scss';

function SearchAutocomplete({
  sites,
  entreprises,
}) {
  const theme = useTheme();
  const [searchIn, setSearchIn] = useState('');
  const [datas, setDatas] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  useEffect(() => {
    if (searchIn === 'sites') {
      setDatas(sites);
      setAutocompleteValue(null);
    }
    if (searchIn === 'entreprises') {
      setDatas(entreprises);
      setAutocompleteValue(null);
    }
  }, [searchIn]);

  /**
   * function to change the value of state selectValue with array received in props
   * @param {string} event
   */
  const handleChangeSearchTarget = (event) => {
    setSearchIn(event.target.value);
  };

  return (
    <Box
      mt={2}
      sx={{
        display: 'flex',
        gap: theme.spacing(1),
      }}
    >
      <Autocomplete
        size="small"
        getOptionLabel={(datas) => `${datas.title}`}
        options={datas}
        sx={{ width: '50%' }}
        renderInput={(params) => (
          <TextField {...params} label="Rechercher..." />
        )}
        value={autocompleteValue}
        onChange={(_event, newValue) => {
          setAutocompleteValue(newValue);
        }}
      />
      <FormControl sx={{ width: '50%' }}>
        <InputLabel id="select-search-label" size="small">Dans</InputLabel>
        <Select
          size="small"
          labelId="select-search-label"
          id="select-search"
          label="Dans"
          value={searchIn}
          onChange={handleChangeSearchTarget}
        >
          <MenuItem value="sites">Sites</MenuItem>
          <MenuItem value="entreprises">Entreprises</MenuItem>
          <MenuItem value="employees">Employés</MenuItem>
        </Select>
      </FormControl>
    </Box>

  );
}

SearchAutocomplete.propTypes = {
  sites: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
  entreprises: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
SearchAutocomplete.defaultProps = {
};
export default React.memo(SearchAutocomplete);
