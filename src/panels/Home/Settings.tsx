import React from 'react';
import {
  Panel, PanelProps,
} from '@vkontakte/vkui';
import {
  StyledPanelHeader,
  ArrowBackPage,
} from 'components/UI';

const Settings: React.FC<PanelProps> = ({ id }) => (
  <Panel id={id}>
    <StyledPanelHeader
      left={<ArrowBackPage />}
      caption="Настройки"
      status="Настрой все как хочется тебе!"
      separator={false}
    />
  </Panel>
);

export default Settings;
