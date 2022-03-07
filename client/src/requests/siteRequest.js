import apiAxios from './index';

export async function getOneSite(id) {
  try {
    const response = apiAxios.get(`/api/admin/site/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
