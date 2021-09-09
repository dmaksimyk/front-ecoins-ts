/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Title } from '@vkontakte/vkui';

const FLoaderTitle: React.FC<{
  children: string | number;
  weight?: 'regular' | 'heavy' | 'bold' | 'semibold' | 'medium';
  level?: '1' | '2' | '3';
  style?: object;
  className?: string;
}> = ({
  className, children, weight = 'regular', level = '2', style = {},
}) => (
  <Title
    className={className}
    weight={weight}
    level={level}
    style={style}
  >
    {children}
  </Title>
);

export default FLoaderTitle;
