const baseUrl = 'https://reqres.in/api/users';

export const getUsers = async (): Promise<GetUsersResponse> => {
  try {
    const response = await fetch(baseUrl);
    const jsonResponse: GetUsersResponse = await response.json();

    return jsonResponse;

  }catch(error) {
    console.error(error.message);
    throw (error);
  }
}

export const createUser = async (userRequest: CreateUserRequest) => {

  try {
    const body = JSON.stringify(userRequest);
    const response = await fetch(baseUrl, { method: 'POST', body });
    const jsonResponse: CreateUserResponse = await response.json();

    return jsonResponse;

  }catch(error) {
    console.error(error.message);
    throw (error);
  }
}