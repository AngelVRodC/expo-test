import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import MenuButton from '../../atoms/menu-button/index';


// TODO: function to open and close menu

const CustomHeader = () => {
  return(
    <Header>
      <Left>
        <MenuButton menuFunction={() => { console.log('Menu Action')}} />
      </Left>
      <Right />
    </Header>
  );
}

export default CustomHeader;

