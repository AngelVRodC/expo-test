import React from 'react';
import { BaseLayout } from '../../templates/main-page/index';
import Header from '../../molecules/header/index';
import { Text } from 'native-base'

const List = () => {
  return(
    <Text>User List Test</Text>
      
  );
}

const UserList = () => {
  return <BaseLayout header={<Header />} content={<List />} />;
};

export default UserList;