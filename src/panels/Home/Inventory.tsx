import React from 'react';
import {
  Panel, PanelProps,
} from '@vkontakte/vkui';
import {
  StyledPanelHeader,
  ArrowBackPage,
} from 'components/UI';

const Inventory: React.FC<PanelProps> = ({ id }) => (
  <Panel id={id}>
    <StyledPanelHeader
      left={<ArrowBackPage />}
      caption="Инвентарь"
      status="Всё ваше имущество только здесь!"
      separator={false}
    />
  </Panel>
);

export default Inventory;
