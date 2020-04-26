import UserListPage from '../pages/users/UsersList';

interface IRoute {
  path: string;
  component: any;
  key: string;
  initial: boolean;
  hideNavBar: boolean;
}
  
export const routes: IRoute[] = [
  {
    path: '/users-list',
    component: UserListPage,
    key: 'Listado de Usuarios',
    initial: true,
    hideNavBar: true
  },
];
  