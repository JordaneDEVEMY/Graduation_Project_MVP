/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PropTypes } from 'prop-types';
import DataGridEmployee from '../DataGridEmployee/DataGridEmployee';

function CreateUserForm({
  datas,
}) {
  return (
    <DataGridEmployee employees={datas} />
  );
}

CreateUserForm.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default React.memo(CreateUserForm);
