import { Panel } from "@vkontakte/vkui";

import { StyledPanelHeader, BonusIcon } from "components/UI";
import { User, Menu, More } from "components/Home/Profile";

type TProps = {
  id: string;
};

const Home = ({ id }: TProps) => {
  return (
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
};

export default Home;
