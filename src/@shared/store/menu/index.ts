const initialState: MenuState = {
    isOpen: false,
  };
  
  const menuReducer = (
    state: MenuState = initialState,
    action: MenuActionType
  ) => {
    switch (action.type) {
      case '@@MENU/IS_OPEN': {
        return {
          ...state,
        };
      }
      default: return initialState;
    }
  }
  
  export default menuReducer;
