import React, { useEffect, useState } from 'react';
import { BaseLayout } from '../../templates/main-page/index';
import { useSelector, useDispatch } from 'react-redux';
import { UserCards } from '../../molecules/Users/index';
import { getUsers } from '../../../@shared/store/users/actions';
import { getUsersState } from '../../../@shared/store/users/selectors';



const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersState);
  const [ usersList, setUsersList ] = useState<User[]>(users);
  useEffect(() => {
    getUsers(dispatch);
  }, []);

  useEffect(() => {
    setUsersList(users)
  }, [users]);

  return <BaseLayout title={'Listado de Usuarios'} content={<UserCards users={usersList} />} />;
};

export default UserList;