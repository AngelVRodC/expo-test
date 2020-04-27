

const initialState: UsersState = {
    users: [],
  };
  
  const usersReducer = (
    state: UsersState = initialState,
    action: UsersActionType
  ) => {
    switch (action.type) {
      case '@@USERS/LIST': {
        return {
          ...state,
          users: action.payload || []
        };
      }
      default: return { ...state };
    }
  }
  
  export default usersReducer;
