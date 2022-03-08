/* eslint-disable no-alert */
/* eslint-disable camelcase */
import {
  getAllCompanies, createCompany, updateCompany, deleteCompany,
} from '../requests/companyRequest';
import * as actions from '../actions';

const companyMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_COMPANIES: {
      const response = await getAllCompanies();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllCompanies(response.data));
      }
      return;
    }
    case actions.CREATE_COMPANY: {
      const { company } = store.getState();
      const {
        name,
        address,
        zipCode: zip_code,
        type,
      } = company;
      const companyDatas = {
        name,
        address,
        zip_code,
        type,
      };
      const response = await createCompany(companyDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetCompanyInformations());
        store.dispatch(actions.actionRequestAllCompanies());
        alert('Company created successfully');
      }
      return;
    }
    case actions.UPDATE_COMPANY: {
      const { company } = store.getState();
      const {
        name,
        address,
        zipCode: zip_code,
        type,
      } = company;
      const companyDatas = {
        name,
        address,
        zip_code,
        type,
      };
      const response = await updateCompany(company.id, companyDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetCompanyInformations());
        store.dispatch(actions.actionRequestAllCompanies());
        alert('Company updated successfully');
      }
      return;
    }
    case actions.DELETE_COMPANY: {
      const { company } = store.getState();
      const response = await deleteCompany(company.id);
      if (response.status === 200) {
        store.dispatch(actions.actionResetCompanyInformations());
        store.dispatch(actions.actionRequestAllCompanies());
        alert('Company deleted successfully');
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default companyMiddleware;
