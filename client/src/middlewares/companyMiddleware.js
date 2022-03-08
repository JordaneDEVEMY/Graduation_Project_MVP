/* eslint-disable camelcase */
import {
  getOneCompany, createCompany, updateCompany, deleteCompany,
} from '../requests/companyRequest';
import * as actions from '../actions';

const companyMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_COMPANY_INFORMATIONS: {
      const { company } = store.getState();
      const response = await getOneCompany(company.id);
      if (response.status === 200) {
        const {
          id,
          name,
          address,
          zip_code: zipCode,
          type,
          created_at: createdAt,
          updated_at: updatedAt,
        } = response.data;

        store.dispatch(actions.actionGetCompanyInformations({
          id,
          name,
          address,
          zipCode,
          type,
          createdAt,
          updatedAt,
        }));
      }
      return;
    }
    case actions.CREATE_COMPANY: {
      const { company } = store.getState();
      const {
        id,
        name,
        address,
        zipCode: zip_code,
        type,
      } = company;
      const companyDatas = {
        id,
        name,
        address,
        zip_code,
        type,
      };
      const response = await createCompany(companyDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestCompanyInformations(response.data.id));
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
        store.dispatch(actions.actionRequestCompanyInformations(response.data.id));
      }
      return;
    }
    case actions.DELETE_COMPANY: {
      const { company } = store.getState();
      const response = await deleteCompany(company.id);
      if (response.status === 200) {
        store.dispatch(actions.actionResetCompanyInformations());
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default companyMiddleware;
