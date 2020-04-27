import * as api from '../../api';

// TODO: Handler Errors
export const getUsers = async (dispatch: any) => {
  
  const response = await api.getUsers();

  dispatch ({
    type: '@@USERS/LIST',
    payload: response.data,
  });
}

export const createUser = async (user: CreateUserRequest) => {
  
  return api.createUser(user);
}

