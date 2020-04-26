export const setMenuState = (payload: MenuState): MenuActionType => ({
  type: '@@MENU/IS_OPEN',
  payload,
});