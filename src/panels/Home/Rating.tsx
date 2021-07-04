import { Panel, Separator } from "@vkontakte/vkui";

import {
  StyledPanelHeader,
  ArrowBackPage,
  RatingMe,
  RatingUsers,
  Help,
  AlertOk,
} from "components";
import { useEffect, useState } from "react";

type TProps = {
  id: string;
};

const Rating = ({ id }: TProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    let timer: any;
    if (!visible) {
      timer = setTimeout(() => setVisible(!visible), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
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
      <RatingMe />
      <Separator />
      <RatingUsers />
    </Panel>
  );
};

export default Rating;
