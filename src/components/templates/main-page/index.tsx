import React, { ReactElement, useEffect } from 'react';
import { Container, Body, Drawer } from "native-base";
import { useSelector, useDispatch } from 'react-redux';
import { getMenuState } from '../../../@shared/store/menu/selectors';
import SideBar from '../../molecules/menu/index';
import Header from '../../molecules/header/index';
import { closeMenu } from '../../../@shared/store/menu/actions';

interface BaseLayoutProps {
  content: ReactElement;
}

// Default Layout with Drawer menu
export const BaseLayout = ({ content }: BaseLayoutProps) => {
  const isOpen = useSelector(getMenuState);
  const dispatch = useDispatch();
  useEffect(() => {

  }, [isOpen]);
  return (
    <Container>
      <Drawer
        type="overlay"
        content={<SideBar/>}
        open={isOpen}
        onClose={() => dispatch(closeMenu())}
        >
        <Header />
        <Body>
          {content}
        </Body>
      </Drawer>
    </Container>
  );
}
