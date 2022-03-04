/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function requestUserPlanning(id) {
  try {
    const response = await apiAxios.get(`/user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
