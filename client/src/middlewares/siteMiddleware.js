/* eslint-disable camelcase */
import {
  getOneSite, createSite, updateSite, deleteSite,
} from '../requests/siteRequest';
import * as actions from '../actions';

const siteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_SITE_INFORMATIONS: {
      const { site } = store.getState();
      const response = await getOneSite(site.id);
      if (response.status === 200) {
        const {
          id,
          name,
          address,
          zip_code: zipCode,
          manager_name: managerName,
          estimated_duration: estimatedDuration,
          company_id: companyId,
          created_at: createdAt,
          updated_at: updatedAt,
        } = response.data;

        store.dispatch(actions.actionGetSiteInformations({
          id,
          name,
          address,
          zipCode,
          managerName,
          estimatedDuration,
          companyId,
          createdAt,
          updatedAt,
        }));
      }
      return;
    }
    case actions.CREATE_SITE: {
      const { site } = store.getState();
      const {
        name,
        address,
        zipCode: zip_code,
        managerName: manager_name,
        estimatedDuration: estimated_duration,
        companyId: company_id,
      } = site;
      const siteDatas = {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
      };
      const response = await createSite(siteDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestSiteInformations(response.data.id));
      }
      return;
    }
    case actions.UPDATE_SITE: {
      const { site } = store.getState();
      const {
        name,
        address,
        zipCode: zip_code,
        managerName: manager_name,
        estimatedDuration: estimated_duration,
        companyId: company_id,
      } = site;
      const siteDatas = {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
      };
      const response = await updateSite(site.id, siteDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestSiteInformations(response.data.id));
      }
      return;
    }
    case actions.DELETE_SITE: {
      const { site } = store.getState();
      const response = await deleteSite(site.id);
      if (response.status === 200) {
        store.dispatch(actions.actionResetSiteInformations());
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default siteMiddleware;
