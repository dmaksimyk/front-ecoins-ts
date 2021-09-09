/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Div, Footer, Group } from '@vkontakte/vkui';
import { TRANSFER_LOG } from 'engine/state';
import { useRecoilValue } from 'recoil';
import { Header } from 'components/UI';
import { RichCell } from '.';

const TransferLog: React.FC = () => {
  const log = useRecoilValue(TRANSFER_LOG);
  return (
    <Group separator="hide" header={<Header>Транзакции</Header>}>
      <Div>
        {log.length < 1 ? (
          <Footer>У вас нет транзакций</Footer>
        ) : (
          log.map((item, index) => (
            <RichCell
              key={index + item.id}
              operation={item.type}
              value={item.amount}
              id={item.id}
            />
          ))
        )}
      </Div>
    </Group>
  );
};

export default TransferLog;
