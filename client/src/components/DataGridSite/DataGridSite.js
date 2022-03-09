import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function DataGridSite({
  sites,
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
  const rows = sites;
  return (
    <DataGrid
      filterModel={filterModel}
      onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
      sx={{ height: '80%', width: 'auto' }}
      columns={[
        {
          field: 'name', headerName: 'Nom', width: 150,
        },
        { field: 'address', headerName: 'Adresse postale', width: 150 },
        { field: 'zip_code', headerName: 'Code postal', width: 150 },
        { field: 'manager_name', headerName: 'Manager', width: 150 },
        { field: 'estimated_duration', headerName: 'Durée estimée (j)', width: 150 },
        { field: 'company_id', headerName: 'Compagnie parente', width: 150 },
      ]}
      rows={rows}
      components={{
        Toolbar: GridToolbar,
      }}
    />
  );
}

DataGridSite.propTypes = {
  sites: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
DataGridSite.defaultProps = {
};
export default React.memo(DataGridSite);
