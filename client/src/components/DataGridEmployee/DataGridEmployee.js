/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  Alert, Box, Button, Typography, Modal,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateEmployeeForm from '../CreateEmployeeForm/CreateEmployeeForm';

function DataGridEmployee({
  employees,
  oneEmployee,
  changeField,
  handleGetEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleCreateEmployee,
  pushEmployeeId,
  resetEmployeeInformations,
}) {
  const theme = useTheme();
  const [selectionModel, setSelectionModel] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [filterModel, setFilterModel] = useState({
    items: [
      {
        columnField: 'lastname',
        operatorValue: 'contains',
        value: '',
      },
    ],
  });

  useEffect(() => {
    pushEmployeeId(selectionModel);
  }, [selectionModel]);
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

  const handleClickDeleteEmployee = () => {
    setShowAlert(false);
    handleDeleteEmployee();
  };

  const handleResetEmployee = () => {
    resetEmployeeInformations();
  };

  const handleClose = () => {
    setModalOpened(false);
    resetEmployeeInformations();
  };

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Employés
      </Typography>
      <Box sx={{ height: '80%', width: 'auto' }}>
        {showAlert && (
          <Alert sx={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }} severity="error">Vous devez sélectionner au moins un employé à supprimer</Alert>
        )}
        <Button
          variant="contained"
          startIcon={(<AddOutlinedIcon />)}
          sx={{ margin: '10px' }}
          onClick={() => {
            handleResetEmployee();
            setModalOpened(true);
          }}
        >
          Ajouter un employé
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteOutlinedIcon />}
          onClick={() => {
            if (selectionModel.length === 0) {
              setShowAlert(true);
              return;
            }
            handleClickDeleteEmployee();
          }}
        >
          Supprimer un employé
        </Button>
        <DataGrid
          sx={{ fontSize: '1.2rem' }}
          disableColumnMenu
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
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
      <Modal
        open={modalOpened}
        onClose={handleClose}
        BackdropProps={{ invisible: false }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.component,
            width: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ textAlign: 'right' }}
          >
            Close

          </Button>
          <CreateEmployeeForm
            employee={oneEmployee}
            handleCreateEmployee={handleCreateEmployee}
            changeField={changeField}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
}

DataGridEmployee.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  oneEmployee: PropTypes.shape(),
  handleGetEmployee: PropTypes.func.isRequired,
  handleUpdateEmployee: PropTypes.func.isRequired,
  handleDeleteEmployee: PropTypes.func.isRequired,
  handleCreateEmployee: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  pushEmployeeId: PropTypes.func.isRequired,
  resetEmployeeInformations: PropTypes.func.isRequired,
};
DataGridEmployee.defaultProps = {
  oneEmployee: null,
};
export default React.memo(DataGridEmployee);
