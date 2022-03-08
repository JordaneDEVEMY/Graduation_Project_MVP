import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreateSite, actionSetSiteInformation } from '../actions/site';
import CreateSiteForm from '../components/CreateSiteForm/CreateSiteForm';

function CreateSiteFormContainer() {
  const dispatch = useDispatch();

  const changeField = (key, value) => {
    dispatch(actionSetSiteInformation(key, value));
  };

  const handleCreateSite = () => {
    dispatch(actionCreateSite());
  };

  return (
    <CreateSiteForm
      changeField={changeField}
      handleCreateSite={handleCreateSite}
    />
  );
}

CreateSiteFormContainer.propTypes = {};
CreateSiteFormContainer.defaultProps = {};
export default React.memo(CreateSiteFormContainer);
