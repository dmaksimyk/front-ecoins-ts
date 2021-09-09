import React, { ReactNode } from 'react';
import { Avatar } from '@vkontakte/vkui';

const Image: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Avatar
    style={{ color: 'var(--button_outline_foreground)' }}
    size={48}
  >
    {children}
  </Avatar>
);

export default Image;
