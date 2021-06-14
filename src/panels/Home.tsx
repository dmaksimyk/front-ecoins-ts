import bridge from '@vkontakte/vk-bridge';

import {
  Icon28GiftOutline
} from '@vkontakte/icons'

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
} from '@gmelum/vkui'

import {
  User,
  Menu,
} from 'components'

type TProps = {
  id: string;
}

const Home = ({ id }: TProps) => {
  const platform = document.body.getAttribute("platform") || 'web';
  return (
    <Panel id={id} >
      <PanelHeader separator={true} left={(platform === "web" || platform === "mobile-web") ? null : <Icon28GiftOutline className="gift-per-watch-video" onClick={() => {
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