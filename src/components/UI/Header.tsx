import React from 'react';
import { Title } from '@vkontakte/vkui';

const StyledHeader: React.FC<{ children: string }> = ({ children }) => (
  <Title
    weight="semibold"
    level="3"
    style={{
      padding: '0 16px',
    }}
  >
    {children}
  </Title>
);
export default StyledHeader;
