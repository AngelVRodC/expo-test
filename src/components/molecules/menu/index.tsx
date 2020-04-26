import React from "react";
import { Container, Content, Text, List, ListItem } from "native-base";
import { routes } from '../../../routes/routes-list';
import {Actions} from 'react-native-router-flux';

const SideBar = () => {
  return (
    <Container>
      <Content>
      <List
        dataArray={routes}
        renderRow={(data) => {
          return (
            <ListItem
                button
                onPress={() => Actions.jump(data.key)}>
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
