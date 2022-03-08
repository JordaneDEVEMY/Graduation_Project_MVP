import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateCompany, actionSetCompanyInformation } from '../actions/company';
import CreateCompanyForm from '../components/CreateCompanyForm/CreateCompanyForm';

function CreateCompanyFormContainer() {
  const dispatch = useDispatch();

  const changeField = (key, value) => {
    dispatch(actionSetCompanyInformation(key, value));
  };

  const handleCreateCompany = () => {
    dispatch(actionCreateCompany());
  };

  return (
    <CreateCompanyForm
      changeField={changeField}
      handleCreateCompany={handleCreateCompany}
    />
  );
}

CreateCompanyFormContainer.propTypes = {};
CreateCompanyFormContainer.defaultProps = {};
export default React.memo(CreateCompanyFormContainer);
