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
          adress,
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
          adress,
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
        id,
        name,
        adress,
        zipCode,
        managerName,
        estimatedDuration,
        companyId,
        createdAt,
        updatedAt,
      } = site;
      const siteDatas = {
        id,
        name,
        adress,
        zipCode,
        managerName,
        estimatedDuration,
        companyId,
        createdAt,
        updatedAt,
      };
      const response = await createSite(siteDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestSiteInformations(response.data.id));
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default siteMiddleware;
