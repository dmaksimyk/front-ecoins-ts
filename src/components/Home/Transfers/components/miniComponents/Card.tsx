import React from 'react';
import { useRecoilValue } from 'recoil';
import { FormItem, Title, MiniInfoCell } from '@vkontakte/vkui';
import { BALANCE, ID } from 'engine/state';
import { Icon24ServicesOutline } from '@vkontakte/icons';

const CardTransferBalance: React.FC = () => {
  const balance = useRecoilValue(BALANCE);
  const wallet = useRecoilValue(ID);

  return (
    <>
      <FormItem className="TransferBalance__FormItem" top="Баланс">
        <Title weight="regular" style={{ padding: 0 }} level="1">
          {balance}
        </Title>
      </FormItem>
      <MiniInfoCell
        className="CardTransferBalance__id"
        before={<div />}
        after={<Icon24ServicesOutline />}
      >
        {wallet}
      </MiniInfoCell>
    </>
  );
};

export default CardTransferBalance;
