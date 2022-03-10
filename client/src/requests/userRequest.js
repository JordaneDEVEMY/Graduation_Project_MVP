/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function updateUserInformations(id, userDatas) {
  try {
    const response = await apiAxios.patch(`/api/user/${id}/profil`, userDatas);
    console.log('updateUserInfos', response);
    return response;
  } catch (err) {
    return err.response;
  }
}
