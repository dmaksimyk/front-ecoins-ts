import React from 'react';
import { useRecoilValue } from 'recoil';
import { Icon12Fire } from '@vkontakte/icons';
import { DONUT } from 'engine/state';

const DonutStatus: React.FC = () => {
  const donut = useRecoilValue(DONUT);

  if (donut) {
    return (
      <div className="donut__icon">
        <Icon12Fire />
      </div>
    );
  }
  return (
    <>
    </>
  );
};

export default DonutStatus;
