import React from 'react';
import Modals from 'components/Modals';
import {
  Home,
  Rating,
  Inventory,
  Transfer,
  Settings,
} from 'panels';
import { useRecoilValue } from 'recoil';
import { ACTIVE_PANEL, ACTIVE_POPOUT } from 'engine/state';
import { View } from '@vkontakte/vkui';

const VHome: React.FC<{id: string}> = ({ id }) => {
  const activePanel = useRecoilValue(ACTIVE_PANEL);
  const popout = useRecoilValue(ACTIVE_POPOUT);

  return (
    <View id={id} activePanel={activePanel} popout={popout} modal={<Modals />}>
      <Home id="Main" />
      <Rating id="Rating" />
      <Transfer id="Transfer" />
      <Inventory id="Inventory" />
      <Settings id="Settings" />
    </View>
  );
};

export default VHome;
