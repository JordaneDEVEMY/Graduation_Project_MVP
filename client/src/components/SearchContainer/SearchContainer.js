/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import entreprises from '../../dataTest/entreprises';
import sites from '../../dataTest/sites';
import './searchcontainer.scss';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete';

function SearchContainer() {
  return (
    <div className="search-container">
      <SearchAutocomplete sites={sites} entreprises={entreprises} />
    </div>
  );
}

SearchContainer.propTypes = {
};
SearchContainer.defaultProps = {
};
export default React.memo(SearchContainer);
