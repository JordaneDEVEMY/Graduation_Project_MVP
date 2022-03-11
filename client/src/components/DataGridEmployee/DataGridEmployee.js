/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import {
//   EditIcon, DeleteIcon, SaveIcon, CancelIcon,
// } from '@mui/icons-material/Edit';

function DataGridEmployee({
  employees,
  handleGetEmployee,
  handleUpdateEmployee,
}) {
  const [filterModel, setFilterModel] = React.useState({
    items: [
      {
        columnField: 'lastname',
        operatorValue: 'contains',
        value: '',
      },
    ],
  });
  const columns = [
    {
      field: 'id', headerName: 'Id', width: 150, hide: true,
    },
    {
      field: 'firstname', headerName: 'Prénom', width: 150, editable: true,
    },
    {
      field: 'lastname', headerName: 'Nom', width: 150, editable: true,
    },
    {
      field: 'email', headerName: 'Email', width: 150, editable: true,
    },
    {
      field: 'phone_number', headerName: 'Téléphone fixe', width: 150, hide: true, editable: true,
    },
    {
      field: 'mobile_number', headerName: 'Téléphone portable', width: 150, editable: true,
    },
    {
      field: 'address', headerName: 'Adresse', width: 150, hide: true, editable: true,
    },
    {
      field: 'zip_code', headerName: 'Code postal', width: 80, hide: true, editable: true,
    },
    {
      field: 'social_security_number', headerName: 'Numéro de sécurité sociale', width: 150, hide: true, editable: true,
    },
    {
      field: 'date_of_birth', headerName: 'Date de naissance', width: 150, hide: true, editable: true,
    },
    {
      field: 'starting_date', headerName: "Date d'entrée", width: 150, hide: true, editable: true,
    },
    {
      field: 'avatar', headerName: 'Avatar', width: 150, hide: true, editable: true,
    },
    {
      field: 'fonction', headerName: 'Fonction', width: 150, editable: true,
    },
    {
      field: 'role_application', headerName: 'Rôle', width: 150, hide: true, editable: true,
    },
    {
      field: 'label', headerName: 'Qualification', width: 150, editable: true,
    },
  ];

  const rows = employees;
  return (
    <Box sx={{ height: '80%', width: 'auto' }}>
      <DataGrid
        editMode="cell"
        onCellEditCommit={(params) => {
          handleUpdateEmployee(params);
        }}
        onCellClick={(params) => {
          handleGetEmployee(params.row);
        }}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        columns={columns}
        rows={rows}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}

DataGridEmployee.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  handleGetEmployee: PropTypes.func.isRequired,
  handleUpdateEmployee: PropTypes.func.isRequired,
};
DataGridEmployee.defaultProps = {
};
export default React.memo(DataGridEmployee);
