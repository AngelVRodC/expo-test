import React, { ReactElement } from 'react';
import { Container, Body } from "native-base";


interface BaseLayoutProps {
  header?: ReactElement;
  content: ReactElement;
}

export const BaseLayout = ({ header, content }: BaseLayoutProps) => {
  return (
    <Container>
      {header}
      <Body>
        {content}
      </Body>
    </Container>
  );
}
