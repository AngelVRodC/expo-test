import React from "react";
import { Container, Content, Text, List, ListItem } from "native-base";
import { routes } from '../../../routes/routes-list';
import {Actions} from 'react-native-router-flux';
import { closeMenu } from '../../../@shared/store/menu/actions';
import { useDispatch } from 'react-redux';


// TODO: split components in Atoms
const SideBar = () => {
  const dispatch = useDispatch();
  const redirect = (key: string) =>{
    Actions.jump(key)
    dispatch(closeMenu())
  }
  return (
    <Container>
      <Content>
      <List
        dataArray={routes}
        renderRow={(data) => {
          return (
            <ListItem
                key={data.path}
                button
                onPress={() => redirect(data.key)}>
              <Text>{data.key}</Text>
            </ListItem>
            );
        }}
      />
      </Content>
    </Container>
  );
}

export default SideBar;
