

const initialState: UsersState = {
    users: [],
  };
  
  const usersReducer = (
    state: UsersState = initialState,
    action: UsersActionType
  ) => {
    switch (action.type) {
      case '@@USERS/LIST': {
        console.log(action.payload);
        return {
          ...state,
          users: action.payload || []
        };
      }
      default: return initialState;
    }
  }
  
  export default usersReducer;
