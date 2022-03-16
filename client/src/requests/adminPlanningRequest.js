/* eslint-disable import/prefer-default-export */
import apiAxios from './index';
// import dateFunctions from '../utils/dateFunctions';

export async function requestAdminPlanning(week) {
  try {
    // const currentWeek = dateFunctions.getCurrentWeekAsString();
    const response = await apiAxios.get(`/api/admin/planning/${week}`);
    console.log(response);
    return response;
  } catch (err) {
    return err.response;
  }
}
