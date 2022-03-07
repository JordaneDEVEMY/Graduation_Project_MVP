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

export async function updateSite(id, siteDatas) {
  try {
    const response = await apiAxios.patch(`/api/admin/site/${id}`, siteDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}
