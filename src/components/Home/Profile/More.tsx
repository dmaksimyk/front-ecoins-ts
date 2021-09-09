/* eslint-disable camelcase */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Title } from '@vkontakte/vkui';
import { DONUT, SUBSCRIBE_GROUP } from 'engine/state';

import DonutPlaceHolder from './DonutPlaceHolder';
import SubscribePlaceHolder from './SubscribePlaceHolder';

const UserMore: React.FC = () => {
  const subscribe_group = useRecoilValue(SUBSCRIBE_GROUP);
  const donut = useRecoilValue(DONUT);

  if ((!subscribe_group && subscribe_group !== undefined) || !donut) {
    return (
      <div>
        <Title
          weight="semibold"
          level="3"
          style={{
            padding: '0 16px',
            paddingBottom: 10,
          }}
        >
          Предложения
        </Title>
        {!subscribe_group && subscribe_group !== undefined ? (
          <SubscribePlaceHolder />
        ) : null}
        {!donut ? <DonutPlaceHolder /> : null}
      </div>
    );
  }
  return <></>;
};

export default UserMore;
