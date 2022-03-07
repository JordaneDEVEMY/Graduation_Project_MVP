import apiAxios from './index';

export async function GetOneEmployee(id) {
  try {
    const response = await apiAxios.get(`/api/admin/user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function CreateEmployee(employeeDatas) {
  try {
    const response = await apiAxios.post(
      '/api/admin/user',
      employeeDatas,
    );
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function UpdateEmployee(id, employeeDatas) {
  try {
    const response = await apiAxios.patch(`/api/admin/user/${id}`, employeeDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function DeleteEmployee(id) {
  try {
    const response = await apiAxios.delete(`/api/admin/user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
