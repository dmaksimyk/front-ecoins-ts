import { useEffect } from 'react';
import { useClient, useAction } from 'engine';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import '@vkontakte/vkui/dist/vkui.css'
import './style/style.scss';

import {
  ACTIVE_MODAL,
  ACTIVE_VIEW_PANEL,
  PLATFORM,
  POPOUT,
} from 'engine/state';

import {
  View,
  Epic,
  Panel,
  ModalPageHeader,
  ModalRoot,
  ModalPage,
} from '@vkontakte/vkui'

import {
  Home,
  Shop,
  Casino,
  Earnings,
} from 'panels'

import {
  SeeUserMore, StyledTabbar
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
  const activeModal = useRecoilValue(ACTIVE_MODAL)
  const action = useAction();

  const modals = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage
        settlingHeight={200}
        id="seeUserMore"
        onClose={() => action.setModal(null)}
        header={
          <ModalPageHeader>
            Подробная информация
          </ModalPageHeader>
        }>
        <SeeUserMore />
      </ModalPage>
    </ModalRoot>
  )

  return (
    <Epic activeStory={activeViewPanel.activeView} tabbar={
      <StyledTabbar />
    }>
      <View id="Home" activePanel={activeViewPanel.activePanel} popout={popout.popout} modal={modals}>
        <Home id="Home" />
        <Panel id="Rating">Rating</Panel>
      </View>
      <View id="Earnings" activePanel={activeViewPanel.activePanel} popout={popout.popout}>
        <Earnings id="Earnings"/>
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