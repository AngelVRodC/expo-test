import React, { useEffect } from 'react';
import { Header, Left, Right } from "native-base";
import MenuButton from '../../atoms/menu-button/index';
import { useDispatch } from 'react-redux';
import { openMenu } from '../../../@shared/store/menu/actions';


//  Header  with menu button
const CustomHeader = () => {

  const dispatch = useDispatch();
  return(
    <Header>
      <Left>
        <MenuButton menuFunction={() => dispatch(openMenu())} />
      </Left>
      <Right />
    </Header>
  );
}

export default CustomHeader;

