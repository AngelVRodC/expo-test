import ListUsersPage from '../components/pages/users/ListUsersPage';
import CreateUserPage from '../components/pages/users/CreateUserPage';
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
    component: ListUsersPage,
    key: 'Listado de Usuarios',
    initial: false,
    hideNavBar: true
  },
  {
    path: '/create-user',
    component: CreateUserPage,
    key: 'Crear Usuario',
    initial: true,
    hideNavBar: true
  },
];
  