import React, { useEffect, useState } from 'react';
import { RichCell, Avatar } from '@vkontakte/vkui';
import { Icon20MoneyTransferOutline } from '@vkontakte/icons';
import { SYMBOLS_RUB, USER_TOKEN } from 'engine/state';
import bridge from '@vkontakte/vk-bridge';

import { useRecoilValue } from 'recoil';

const RichCellStyled: React.FC<{
  operation: 'SEND' | 'ME';
  value: string;
  id: number;
}> = ({
  operation,
  value,
  id,
}) => {
  const [name, setName] = useState<string>('');
  const userToken = useRecoilValue(USER_TOKEN);

  useEffect(() => {
    if (id) {
      bridge
        .send('VKWebAppCallAPIMethod', {
          method: 'users.get',
          params: {
            user_ids: `${id}`,
            v: '5.131',
            access_token: userToken,
          },
        })
        .then((data) => {
          const getName = data.response[0].first_name !== 'DELETED'
            ? `${data.response[0].first_name} ${data.response[0].last_name}`
            : '';
          setName(getName);
        })
        .catch(() => setName(''));
    }
  });
  return (
    <>
      <RichCell
        disabled
        before={(
          <Avatar
            style={
              operation === 'SEND'
                ? { background: 'var(--destructive)' }
                : { background: 'var(--dynamic_green)' }
            }
            shadow={false}
            size={48}
          >
            <Icon20MoneyTransferOutline fill="var(--white)" />
          </Avatar>
        )}
        caption={`${operation === 'SEND' ? 'Получатель' : 'Отправитель'}: ${
          name === '' ? 'Человек' : name
        }`}
        after={`${operation === 'SEND' ? '-' : '+'}${value} ${SYMBOLS_RUB}`}
      >
        {operation === 'SEND' ? 'Вы перевели' : 'Вам перевод'}
      </RichCell>
    </>
  );
};

export default RichCellStyled;
