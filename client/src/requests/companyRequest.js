import apiAxios from './index';

export async function getOneCompany(id) {
  try {
    const response = await apiAxios.get(`/api/admin/company/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
