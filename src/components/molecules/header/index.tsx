import React from 'react';
import { Header, Left, Right, Body, Title } from "native-base";
import MenuButton from '../../atoms/menu-button/index';
import { useDispatch } from 'react-redux';
import { openMenu } from '../../../@shared/store/menu/actions';


interface IPropsHeader {
  title: string;
}

//  Header  with menu button
const CustomHeader = ({ title }: IPropsHeader) => {

  const dispatch = useDispatch();
  return(
    <Header>
      <React.Fragment>
      <Left>
        <MenuButton menuFunction={() => dispatch(openMenu())} />

      </Left>
      <Right>
      <Body>
          <Title>{title}</Title>
        </Body>
      </Right>
      </React.Fragment>
    </Header>
  );
}

export default CustomHeader;

