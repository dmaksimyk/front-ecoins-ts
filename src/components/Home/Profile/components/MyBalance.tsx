import React from 'react';
import { useRecoilValue } from 'recoil';
import { BALANCE } from 'engine/state';
import { MiniInfoCell } from '@vkontakte/vkui';
import { Icon20MoneyCircleOutline } from '@vkontakte/icons';

const MyBalance: React.FC = () => {
  const balance = useRecoilValue(BALANCE);

  return (
    <>
      <MiniInfoCell
        key="balance"
        before={<Icon20MoneyCircleOutline />}
      >
        Баланс:
        {balance}
      </MiniInfoCell>
    </>
  );
};

export default MyBalance;
