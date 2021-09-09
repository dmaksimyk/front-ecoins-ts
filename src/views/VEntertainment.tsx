import React from 'react';
import Modals from 'components/Modals';
import { Casino } from 'panels';
import { View } from '@vkontakte/vkui';
import { useRecoilValue } from 'recoil';
import { ACTIVE_PANEL, ACTIVE_POPOUT } from 'engine/state';

const VEntertainment: React.FC<{id: string}> = ({ id }) => {
  const activePanel = useRecoilValue(ACTIVE_PANEL);
  const popout = useRecoilValue(ACTIVE_POPOUT);

  return (
    <View
      id={id}
      activePanel={activePanel}
      popout={popout}
      modal={<Modals />}
    >
      <Casino id="Main" />
    </View>
  );
};

export default VEntertainment;
