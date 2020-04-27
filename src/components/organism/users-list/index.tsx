import React, { useEffect, useState } from 'react';
import { BaseLayout } from '../../templates/main-page/index';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'native-base'
import { UserCards } from '../../molecules/Users/index';
import { getUsers } from '../../../@shared/store/users/actions';
import { getUsersState } from '../../../@shared/store/users/selectors';
import { getMenuState } from '../../../@shared/store/menu/selectors';



const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersState);
  const isOpen = useSelector(getMenuState);
  const [ usersList, setUsersList ] = useState<User[]>([]);
  useEffect(() => {
  getUsers(dispatch);
  }, []);

  useEffect(() => {
    setUsersList(users)
  }, [users]);

  return <BaseLayout title={'Listado de Usuarios'} content={<UserCards users={usersList} />} />;
};

export default UserList;