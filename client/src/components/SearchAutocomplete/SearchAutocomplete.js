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
          <TextField {...params} label="Recherche..." />
        )}
        value={autocompleteValue}
        onChange={(_event, newValue) => {
          setAutocompleteValue(newValue);
        }}
      />
      <FormControl sx={{ width: '50%' }}>
        <InputLabel id="select-seach-label" size="small">Filtrer</InputLabel>
        <Select
          size="small"
          labelId="select-seach-label"
          id="select-seach"
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
