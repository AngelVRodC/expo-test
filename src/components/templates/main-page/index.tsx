import React, { ReactElement, useEffect } from 'react';
import { Container, Body, Drawer, Root } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { getMenuState } from '../../../@shared/store/menu/selectors';
import SideBar from '../../molecules/menu/index';
import Header from '../../molecules/header/index';
import { closeMenu } from '../../../@shared/store/menu/actions';
import { getLoaderState } from '../../../@shared/store/status/selectors';
import Loader from '../../molecules/loader/index';

interface BaseLayoutProps {
  content: ReactElement;
  title: string;
}

// Default Layout with Drawer menu
export const BaseLayout = ({ content, title }: BaseLayoutProps) => {
  const isOpen = useSelector(getMenuState);
  const isLoading = useSelector(getLoaderState);
  const dispatch = useDispatch();
  useEffect(() => {

  }, [isOpen, isLoading]);
  return (
    isLoading
    ? <Loader/>
    : 
        <Container>
          <Drawer
            type="overlay"
            content={<SideBar/>}
            open={isOpen}
            onClose={() => dispatch(closeMenu())}
            >
            <Header title={title}/>
            <Body>
              {content}
            </Body>
          </Drawer>
        </Container>
  );
}
