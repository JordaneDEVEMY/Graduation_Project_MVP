import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function DataGridCompany({
  companies,
}) {
  const [filterModel, setFilterModel] = React.useState({
    items: [
      {
        columnField: 'name',
        operatorValue: 'contains',
        value: '',
      },
    ],
  });
  const rows = companies;
  return (
    <DataGrid
      filterModel={filterModel}
      onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
      sx={{ height: '80%', width: 'auto' }}
      columns={[
        { field: 'name', headerName: 'Nom', width: 150 },
        { field: 'address', headerName: 'Adresse postale', width: 150 },
        { field: 'zip_code', headerName: 'Code postal', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
      ]}
      rows={rows}
      components={{
        Toolbar: GridToolbar,
      }}
    />
  );
}

DataGridCompany.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
DataGridCompany.defaultProps = {
};
export default React.memo(DataGridCompany);
