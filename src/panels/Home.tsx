import bridge from '@vkontakte/vk-bridge';

import { 
  useRecoilValue 
} from 'recoil';

import { 
  PLATFORM 
} from 'engine/state';

import {
  Icon28GiftOutline
} from '@vkontakte/icons'

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
} from '@vkontakte/vkui'

import {
  User,
  Menu,
} from 'components'

type TProps = {
  id: string;
}

const Home = ({ id }: TProps) => {
  const platform = useRecoilValue(PLATFORM);

  return (
    <Panel id={id} >
      <PanelHeader separator={true} left={(!platform || platform === "web" || platform === "mobile-web") ? null : <Icon28GiftOutline className="gift-per-watch-video" onClick={() => {
        (bridge as any).send("VKWebAppShowNativeAds", { ad_format: "reward " })
          .then((data: any) => console.log(data))
          .catch((error: any) => console.log(error));
        }} />
      }>
        <PanelHeaderContent
          status='Ваш профиль и меню'
          before={true}
          aside
        >
          Главная
        </PanelHeaderContent>
      </PanelHeader>
      <User container={<Menu />} />
    </Panel >
  )
}

export default Home