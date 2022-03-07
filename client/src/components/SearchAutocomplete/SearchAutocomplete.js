/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
import {
  Autocomplete, TextField, InputLabel, Select, MenuItem, Grid, FormControl,
} from '@mui/material';

import './searchautocomplete.scss';

function SearchAutocomplete() {
  // const theme = useTheme();
  const [searchIn, setSearchIn] = useState('');
  const [datas, setDatas] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  useEffect(() => {
    if (searchIn === 'sites') {
      setDatas();
      setAutocompleteValue(null);
    }
    if (searchIn === 'entreprises') {
      setDatas();
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
    <Grid
      container
      spacing={1}
      mt={1}
    >
      <Grid item xs={12} sm={6}>
        <Autocomplete
          size="small"
          getOptionLabel={(datas) => `${datas.title}`}
          options={datas}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField {...params} label="Rechercher..." />
          )}
          value={autocompleteValue}
          onChange={(_event, newValue) => {
            setAutocompleteValue(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: '100%' }}>
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
      </Grid>
    </Grid>

  );
}

SearchAutocomplete.propTypes = {
};
SearchAutocomplete.defaultProps = {
};
export default React.memo(SearchAutocomplete);
