import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchAutocomplete from '../components/SearchAutocomplete/SearchAutocomplete';

function SearchAutocompleteContainer() {
  return (
    <SearchAutocomplete />
  );
}

SearchAutocompleteContainer.propTypes = {};
SearchAutocompleteContainer.defaultProps = {};
export default React.memo(SearchAutocompleteContainer);
