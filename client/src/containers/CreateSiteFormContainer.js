import React from 'react';
import { useSelector } from 'react-redux';
import CreateSiteForm from '../components/CreateSiteForm/CreateSiteForm';

function CreateSiteFormContainer() {
  const allSites = useSelector((state) => state.allSites.sites);
  console.log(allSites);

  return (
    <CreateSiteForm
      datas={allSites}
    />
  );
}

CreateSiteFormContainer.propTypes = {};
CreateSiteFormContainer.defaultProps = {};
export default React.memo(CreateSiteFormContainer);
