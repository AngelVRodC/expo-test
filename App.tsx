import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './HomeScreen/HomeScreen';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

 const App = ()  => {
  return (
    <Container>
    <Header>
    <Left>
      <Button
        transparent
        onPress={() => console.log('open')}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
        <Title>HomeScreen</Title>
    </Body>
    <Right />
  </Header>
      <Router >
      <Scene key="root">
      <Scene key="Listado de Usuarios" component={HomeScreen} initial={true} hideNavBar={true} />
      <Scene key="Crear Usuario" component={HomeScreen} title="PageTwo" hideNavBar={true} />
      </Scene>
    </Router>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
