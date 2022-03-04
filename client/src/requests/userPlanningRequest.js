/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function requestUserPlanning(id) {
  try {
    const response = await apiAxios.get(`/api/user/${id}`);
    console.log(response);
    return response;
  } catch (err) {
    return err.response;
  }
}
