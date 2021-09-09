import React from 'react';
import { useNavigation } from 'engine';
import { MiniInfoCell } from '@vkontakte/vkui';
import { Icon20Info } from '@vkontakte/icons';

const OpenMoreInfo: React.FC = () => {
  const history = useNavigation();

  return (
    <MiniInfoCell
      key="MoreInfo__button"
      before={<Icon20Info />}
      mode="more"
      onClick={() => history.nextPage({ activeModal: 'seeUserMore' })}
    >
      Подробная информация
    </MiniInfoCell>
  );
};

export default OpenMoreInfo;
