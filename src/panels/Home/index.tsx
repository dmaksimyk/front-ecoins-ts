import {
  useRecoilValue
} from 'recoil';

import {
  BONUS,
  PLATFORM,
} from 'engine/state';

import {
  Panel,
} from '@vkontakte/vkui'

import {
  User,
  Menu,
  UserMore,
  StyledPanelHeader,
  BonusIcon
} from 'components'

type TProps = {
  id: string;
}

const Home = ({ id }: TProps) => {
  const platform = useRecoilValue(PLATFORM);
  const bonus = useRecoilValue(BONUS)

  return (
    <Panel id={id} >
      <StyledPanelHeader
        left={
          (!platform || platform === "web" || platform === "mobile-web" || !bonus) ? 
          null : <BonusIcon /> 
        }
        caption="Главная"
        status="Ваш профиль и меню"
      />
      <User container={<Menu />} />
      <UserMore />
    </Panel >
  )
}

export default Home