import { Component } from 'react'
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

interface AppProps {
  id: string,
}
interface AppState {
}

class Home extends Component<AppProps, AppState> {
  render() {
    return (
      <Panel id={this.props.id} >
        <PanelHeader separator={true} left={document.body.getAttribute("platform") !== "web" ? <Icon28GiftOutline className="gift-per-watch-video" onClick={() => {
          (bridge as any).send("VKWebAppShowNativeAds", { ad_format: "preloader" })
            .then((data: any) => console.log(data))
            .catch((error: any) => console.log(error));
        }
        } /> : null}>
          <PanelHeaderContent
            status='Ваш профиль и меню'
            before={true}
            aside
          >
            Главная
          </PanelHeaderContent>
        </PanelHeader>
        <User
          img={'this.props.img'}
          first_name={'this.props.first_name'}
          last_name={'this.props.last_name'}
          balance={'this.props.balance'}
          level={'this.props.exp'}
          id={12315}
          online={'this.props.online'}
          donut={false}
          container={<Menu/>}
        />
      </Panel>
    )
  }
}

export default Home