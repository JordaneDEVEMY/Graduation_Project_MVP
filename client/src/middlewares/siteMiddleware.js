/* eslint-disable no-alert */
/* eslint-disable camelcase */
import {
  getAllSites, createSite, updateSite, deleteSite,
} from '../requests/siteRequest';
import * as actions from '../actions';

const siteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_SITES: {
      const response = await getAllSites();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllSites(response.data));
      }
      return;
    }
    case actions.CREATE_SITE: {
      const { site } = store.getState();
      const {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
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
        store.dispatch(actions.actionResetSiteInformations());
        store.dispatch(actions.actionRequestAllSites());
        console.log('Site created successfully');
      }
      return;
    }
    case actions.UPDATE_SITE: {
      const { site } = store.getState();
      const {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
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
        store.dispatch(actions.actionResetSiteInformations());
        store.dispatch(actions.actionRequestAllSites());
        console.log('Site updated successfully');
      }
      return;
    }
    case actions.DELETE_SITE: {
      const { site } = store.getState();
      site.sitesToDelete.map(async (id) => {
        const response = await deleteSite(id);
        if (response.status === 200) {
          store.dispatch(actions.actionRequestAllSites());
          console.log('Site deleted successfully');
        }
      });
      store.dispatch(actions.actionResetSiteInformations());
      return;
    }
    default: {
      next(action);
    }
  }
};

export default siteMiddleware;
