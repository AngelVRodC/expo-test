import React from "react";
import { Icon, Button } from "native-base";

interface MenuButtonProps {
  menuFunction: Function;
}

const MenuButton = ({ menuFunction }: MenuButtonProps) => {
  return(
    <Button
        transparent
        onPress={() => menuFunction()}>
        <Icon name="menu" />
    </Button>
  );
}

export default MenuButton;

