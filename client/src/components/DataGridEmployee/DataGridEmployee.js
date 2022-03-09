import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function DataGridEmployee({
  employees,
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
  const rows = employees;
  return (
    <DataGrid
      filterModel={filterModel}
      onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
      sx={{ height: '80%', width: 'auto' }}
      columns={[
        {
          field: 'firstname', headerName: 'Prénom', width: 150,
        },
        { field: 'lastname', headerName: 'Nom', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        {
          field: 'phone_number', headerName: 'Téléphone fixe', width: 150, hide: true,
        },
        { field: 'mobile_number', headerName: 'Téléphone portable', width: 150 },
        {
          field: 'address', headerName: 'Adresse', width: 150, hide: true,
        },
        {
          field: 'zip_code', headerName: 'Code postal', width: 80, hide: true,
        },
        {
          field: 'social_security_number', headerName: 'Numéro de sécurité sociale', width: 150, hide: true,
        },
        {
          field: 'date_of_birth', headerName: 'Date de naissance', width: 150, hide: true,
        },
        {
          field: 'starting_date', headerName: "Date d'entrée", width: 150, hide: true,
        },
        {
          field: 'avatar', headerName: 'Avatar', width: 150, hide: true,
        },
        { field: 'fonction', headerName: 'Fonction', width: 150 },
        {
          field: 'role_application', headerName: 'Rôle', width: 150, hide: true,
        },
        { field: 'label', headerName: 'Qualification', width: 150 },
      ]}
      rows={rows}
      components={{
        Toolbar: GridToolbar,
      }}
    />
  );
}

DataGridEmployee.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
DataGridEmployee.defaultProps = {
};
export default React.memo(DataGridEmployee);
