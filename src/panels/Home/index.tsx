import React from 'react';
import { Panel, PanelProps } from '@vkontakte/vkui';
import { StyledPanelHeader, BonusIcon } from 'components/UI';
import { User, Menu, More } from 'components/Home/Profile';

const Home: React.FC<PanelProps> = ({ id }) => (
  <Panel id={id}>
    <StyledPanelHeader
      left={<BonusIcon />}
      caption="Главная"
      status="Ваш профиль"
    />
    <User container={<Menu />} />
    <More />
  </Panel>
);

export default Home;
