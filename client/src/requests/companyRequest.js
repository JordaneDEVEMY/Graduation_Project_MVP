import apiAxios from './index';

export async function getOneCompany(id) {
  try {
    const response = await apiAxios.get(`/api/admin/company/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createCompany(companyDatas) {
  try {
    const response = await apiAxios.post(
      '/api/admin/company',
      companyDatas,
    );
    return response;
  } catch (err) {
    return err.response;
  }
}
