interface ReduxStore {
  menu: MenuState;
  users: UsersState;
  status: statusState;
}

interface MenuState {
  isOpen: boolean;
}

interface statusState {
  isLoading: boolean;
}

interface UsersState {
  users: User[];
}