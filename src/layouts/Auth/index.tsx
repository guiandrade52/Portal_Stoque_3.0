import React from 'react';

import { Wrapper, Content } from './styles';

export default function AuthLayout(props: any) {
  const { children } = props;
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
