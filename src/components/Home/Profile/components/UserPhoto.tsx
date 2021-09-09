import React from 'react';
import { useRecoilValue } from 'recoil';
import { Avatar, Div } from '@vkontakte/vkui';
import { IMG } from 'engine/state';
import DonutStatus from './DonutStatus';

const UserPhoto: React.FC = () => {
  const img = useRecoilValue(IMG);

  return (
    <Div className="UserPhoto__photo">
      <DonutStatus />
      <Avatar
        className="UserPhoto__avatar"
        src={img}
        alt=""
        size={56}
      />
    </Div>
  );
};

export default UserPhoto;
