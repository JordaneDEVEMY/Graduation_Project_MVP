/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Autocomplete, TextField, InputLabel, Select, MenuItem, Box, FormControl,
} from '@mui/material';
import PropTypes from 'prop-types';

import './searchautocomplete.scss';

function SearchAutocomplete({
  sites,
  entreprises,
}) {
  const [selectedValue, setSelectedValue] = useState('');
  const [datas, setDatas] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  console.log(autocompleteValue);

  useEffect(() => {
    if (selectedValue === 'sites') {
      setDatas(sites);
      setAutocompleteValue(null);
    }
    if (selectedValue === 'entreprises') {
      setDatas(entreprises);
      setAutocompleteValue(null);
    }
  }, [selectedValue]);

  /**
   * function to change the value of state selectValue with array received in props
   * @param {string} event
   */
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{
      m: 1, minWidth: 120, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
    }}
    >
      <FormControl sx={{ margin: '5px' }}>
        <InputLabel id="select-seach-label">Filtrer</InputLabel>
        <Select
          labelId="select-seach-label"
          id="select-seach"
          sx={{ width: '300px', marginBottom: '10px' }}
          label="Filtrer"
          value={selectedValue}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="sites">Sites</MenuItem>
          <MenuItem value="entreprises">Entreprises</MenuItem>
          <MenuItem value="employees">Employés</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
        getOptionLabel={(datas) => `${datas.title}`}
        options={datas}
        sx={{ width: '300px', margin: '5px' }}
        renderInput={(params) => (
          <TextField {...params} label="Recherche..." />
        )}
        value={autocompleteValue}
        onChange={(_event, newValue) => {
          setAutocompleteValue(newValue);
        }}
      />
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
