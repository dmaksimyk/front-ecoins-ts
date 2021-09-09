import React, { ReactNode } from 'react';
import { Placeholder, Spinner, Text } from '@vkontakte/vkui';

const Loader: React.FC<{
  icon: ReactNode | undefined;
}> = ({ icon }) => (
  <Placeholder icon={icon || <Spinner />}>
    <Text weight="regular">Загрузка, ожидайте...</Text>
  </Placeholder>
);

export default Loader;
