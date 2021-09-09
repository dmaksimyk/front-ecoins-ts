/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Div, Card } from '@vkontakte/vkui';
import { RATING } from 'engine/state';
import { TRating } from 'engine/types';
import { useRecoilValue } from 'recoil';

import { User } from './components';

const Rating: React.FC = () => {
  const users = useRecoilValue(RATING);

  return (
    <Div>
      <Card className="Rating__user-list" mode="shadow">
        {users.map((item: TRating, index) => (
          <User
            key={item.id + index}
            id={item.id}
            img={item.img}
            name={item.name}
            position={index + 1}
            balance={item.balance}
          />
        ))}
      </Card>
    </Div>
  );
};

export default Rating;
