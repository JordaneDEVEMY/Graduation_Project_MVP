/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import DataGridSite from '../DataGridSite/DataGridSite';

function CreateSiteForm({
  datas,
}) {
  return (
    <DataGridSite sites={datas} />
  );
}

CreateSiteForm.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default React.memo(CreateSiteForm);
