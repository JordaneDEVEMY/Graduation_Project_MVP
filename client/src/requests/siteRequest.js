import apiAxios from './index';

export async function getOneSite(id) {
  try {
    const response = apiAxios.get(`/api/admin/site/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createSite(siteDatas) {
  try {
    const response = await apiAxios.post(
      '/api/admin/site',
      siteDatas,
    );
    return response;
  } catch (err) {
    return err.response;
  }
}
