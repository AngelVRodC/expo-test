const initialState: statusState = {
    isLoading: false,
  };
  
  const statusReducer = (
    state: statusState = initialState,
    action: StatusActionType
  ) => {
    switch (action.type) {
      case '@@STATUS/IS_LOADING': {
        return {
          ...state,
          isLoading: action.payload
        };
      }
      default: return state;
    }
  }
  
  export default statusReducer;
