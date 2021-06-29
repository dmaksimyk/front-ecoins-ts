import { useEffect } from 'react';
import { useClient } from 'engine';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import '@vkontakte/vkui/dist/vkui.css'
import './style/style.scss';

import {
  ACTIVE_VIEW_PANEL,
  PLATFORM,
  POPOUT,
} from 'engine/state';

import {
  View,
  Epic,
  Panel,
} from '@vkontakte/vkui'

import {
  Home,
  Shop,
  Casino,
  Earnings,
} from 'panels'

import {
  Modals,
  StyledTabbar
} from 'components'

const App = () => {
  const platform = document.body.getAttribute('platform')
  const setPlatform = useSetRecoilState(PLATFORM)

  useEffect(() => {
    if (platform) {
      setPlatform(platform)
      console.log('setPlatform:', platform)
    }
  }, [platform, setPlatform])

  useClient();
  const popout = useRecoilValue(POPOUT);
  const activeViewPanel = useRecoilValue(ACTIVE_VIEW_PANEL);

  return (
    <Epic
      activeStory={activeViewPanel.activeView}
      tabbar={<StyledTabbar />}
    >
      <View id="Home" activePanel={activeViewPanel.activePanel} popout={popout.popout} modal={<Modals />}>
        <Home id="Home" />
        <Panel id="Rating">Rating</Panel>
      </View>
      <View id="Earnings" activePanel={activeViewPanel.activePanel} popout={popout.popout}>
        <Earnings id="Earnings" />
      </View>
      <View id="Entertainment" activePanel={activeViewPanel.activePanel} popout={popout.popout}>
        <Casino id="Entertainment" />
      </View>
      <View id="Shop" activePanel={activeViewPanel.activePanel} popout={popout.popout}>
        <Shop id="Shop" />
      </View>
    </Epic>
  )
}

export default App;