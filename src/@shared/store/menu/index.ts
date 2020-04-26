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
          isOpen: true
        };
      }
      case '@@MENU/IS_CLOSE': {
        return {
          isOpen: false
        };
      }
      default: return initialState;
    }
  }
  
  export default menuReducer;
