import React from 'react';
import { Group, Div } from '@vkontakte/vkui';
import { Header } from 'components/UI';
import InputId from './InputId';

const TransferInput: React.FC = () => (
  <Group separator="hide" header={<Header>Перевод</Header>}>
    <Div>
      <InputId />
    </Div>
  </Group>
);

export default TransferInput;
