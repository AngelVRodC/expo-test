interface ReduxStore {
  menu: MenuState;
  users: UsersState;
}

interface MenuState {
  isOpen: boolean;
}

interface UsersState {
  users: User[];
}