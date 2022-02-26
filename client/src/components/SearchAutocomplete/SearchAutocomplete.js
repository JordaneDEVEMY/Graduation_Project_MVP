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
  const [selectValue, setSelectValue] = useState('');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (selectValue === 'sites') {
      setDatas(sites);
    }
    if (selectValue === 'entreprises') {
      setDatas(entreprises);
    }
  }, [selectValue]);

  /**
   * function to change the value of state selectValue with array received in props
   * @param {string} event
   */
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  /**
   *
   * @param {Object} params
   * @returns a textField component
   */
  const renderInput = (params) => {
    console.log(params.inputProps);
    return (
      <TextField {...params} label="Recherche..." />
    );
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
          value={selectValue}
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
        autoComplete
        options={datas.map((option) => option.title)}
        sx={{ width: '300px', margin: '5px' }}
        renderInput={renderInput}
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
