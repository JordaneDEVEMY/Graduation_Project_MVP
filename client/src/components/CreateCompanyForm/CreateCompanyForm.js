/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import DataGridCompany from '../DataGridCompany/DataGridCompany';

function CreateCompanyForm({
  datas,
}) {
  return (
    <DataGridCompany companies={datas} />
  );
}

CreateCompanyForm.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default React.memo(CreateCompanyForm);
