
export const getUsers = async (dispatch: any) => {
  const response = await fetch('https://reqres.in/api/users');
  const jsonResponse: GetUsersResponse = await response.json();
  dispatch ({
    type: '@@USERS/LIST',
    payload: jsonResponse.data,
  });
}