
import React from 'react';
import { Content, Card, CardItem, Left, Thumbnail, Body,Text, List, ListItem } from 'native-base';


interface IPropsUser {
  user: User
}

interface IPropsUsers {
  users: User[]
}

// TODO: split components in Atoms
const UserCard = ({ user }: IPropsUser) => {
  return (
    <ListItem>
    <Content>
    <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: user.avatar}} />
          <Body>
            <Text>{user.first_name} {user.last_name}</Text>
            <Text>{user.email}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
    </Content>
    </ListItem>
  )
};

export const UserCards = ({ users }: IPropsUsers) => {
  return (<Content>
    <List>
    {users.map((user) =>
      <UserCard user={user} key={user.id}/>
    )}
     </List>
  </Content>)
};


