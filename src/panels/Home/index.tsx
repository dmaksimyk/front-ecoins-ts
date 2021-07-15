import { Panel } from "@vkontakte/vkui";

import { User, Menu, UserMore, StyledPanelHeader, BonusIcon } from "components";

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
      <UserMore />
    </Panel>
  );
};

export default Home;
