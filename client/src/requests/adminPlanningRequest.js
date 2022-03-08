/* eslint-disable import/prefer-default-export */
import apiAxios from './index';
import dateFunctions from '../utils/dateFunctions';

export async function requestAdminPlanning() {
  try {
    const currentWeek = dateFunctions.getCurrentWeekAsString();
    const response = await apiAxios.get(`/api/admin/planning/${currentWeek}`);
    console.log(response);
    return response;
  } catch (err) {
    return err.response;
  }
}
