import { useEffect } from 'react';
import { useClient, useNavigation } from 'engine';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import '@vkontakte/vkui/dist/vkui.css'
import './style/style.scss';

import {
  ACTIVE_PANEL,
  ACTIVE_VIEW,
  PLATFORM,
  POPOUT,
} from 'engine/state';

import {
  View,
  Epic,
} from '@vkontakte/vkui'

import {
  Home,
  Rating,
  Shop,
  Casino,
  Earnings,
  Inventory,
  Transfer,
  Settings,
} from 'panels'

import {
  Modals,
  StyledTabbar
} from 'components'

const App = () => {
  const platform = document.body.getAttribute('platform')
  const setPlatform = useSetRecoilState(PLATFORM)

  useClient();
  const history = useNavigation()
  const activeView = useRecoilValue(ACTIVE_VIEW);
  const activePanel = useRecoilValue(ACTIVE_PANEL);
  const popout = useRecoilValue(POPOUT)

  useEffect(() => {
    window.addEventListener('popstate', () => history.backPage());
    window.history.pushState(undefined, "");
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (platform) {
      setPlatform(platform)
      console.log('setPlatform:', platform)
    }
  }, [platform, setPlatform])

  return (
    <Epic
      activeStory={activeView}
      tabbar={<StyledTabbar />}
    >
      <View id="Home" activePanel={activePanel} popout={popout} modal={<Modals />}>
        <Home id="Main" />
        <Rating id="Rating" />
        <Transfer id="Transfer" />
        <Inventory id="Inventory" />
        <Settings id="Settings" />
      </View>
      <View id="Earnings" activePanel={activePanel} popout={popout}>
        <Earnings id="Main" />
      </View>
      <View id="Entertainment" activePanel={activePanel} popout={popout}>
        <Casino id="Main" />
      </View>
      <View id="Shop" activePanel={activePanel} popout={popout}>
        <Shop id="Main" />
      </View>
    </Epic>
  )
}

export default App;