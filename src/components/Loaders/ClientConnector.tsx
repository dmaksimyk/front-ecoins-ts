import React from 'react';
import {
  Card, Header, Spinner, Title, Separator,
} from '@vkontakte/vkui';

const CustomLoader: React.FC = () => (
  <div className="CustomLoader__container">
    <Card className="CustomLoader__card" mode="shadow">
      <Header mode="secondary">Подключение</Header>
      <Separator />
      <Spinner className="CustomLoader__separator" size="medium" />
      <Title className="CustomLoader__title" weight="regular" level="3">
        Ожидаем ответа от сервера
      </Title>
    </Card>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(CustomLoader as any).type = 'CustomLoader';
export default CustomLoader;
