/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Panel, PanelProps, Separator } from '@vkontakte/vkui';
import {
  StyledPanelHeader,
  ArrowBackPage,
  Help,
} from 'components/UI';
import {
  Me,
  Main,
} from 'components/Home/Rating';

const Rating: React.FC<PanelProps> = ({ id }) => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    let timer: any;
    if (!visible) {
      timer = setTimeout(() => setVisible(!visible), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Panel id={id}>
      <StyledPanelHeader
        left={<ArrowBackPage />}
        caption="Рейтинг"
        status="Стань лучшим среди лучших!"
      />
      <Help
        header="Рейтинг"
        text="ТОП-20 самых богатых игроков."
        text2="Чем больше денег — тем выше место."
        style={{ marginBottom: 0 }}
      />
      <Me />
      <Separator />
      <Main />
    </Panel>
  );
};

export default Rating;
