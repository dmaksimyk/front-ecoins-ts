// vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=localhost --port=10888
import { useClient, useAction } from 'engine';
import { useRecoilValue } from 'recoil';

import '@gmelum/vkui/dist/vkui.css'
import './style/style.scss';

import {
  ACTIVE_MODAL,
  ACTIVE_VIEW_PANEL,
  POPOUT
} from 'engine/state';

import {
  View,
  Epic,
  Tabbar,
  TabbarItem,
  Panel,
  ModalPageHeader,
  PanelHeaderClose,
  PanelHeaderButton,
  ModalRoot,
  ModalPage,
} from '@gmelum/vkui'

import {
  Icon24Dismiss,
  Icon28UserCircleOutline,
  Icon28GameOutline,
  Icon28MoneyWadOutline,
  Icon28ShoppingCartOutline
} from '@vkontakte/icons'

import {
  Home,
  Casino
} from 'panels'

import {
  SeeUserMore
} from 'components'

const App = () => {
  useClient();
  const popout = useRecoilValue(POPOUT);
  const activeViewPanel = useRecoilValue(ACTIVE_VIEW_PANEL);
  const activeModal = useRecoilValue(ACTIVE_MODAL)
  const action = useAction();
  const platform = document.body.getAttribute('platform') 

  const modals = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage
        settlingHeight={200}
        id="seeUserMore"
        onClose={() => action.setModal(null)}
        header={
          <ModalPageHeader
            right={(platform === 'ios' || platform === "web") && <PanelHeaderButton onClick={() => action.setModal(null)}><Icon24Dismiss /></PanelHeaderButton>}
            left={(platform === 'android' || platform === "mobile-web") && <PanelHeaderClose onClick={() => action.setModal(null)} />}
          >
            Подробная информация
          </ModalPageHeader>
        }>
        <SeeUserMore />
      </ModalPage>
    </ModalRoot>
  )

  return (
    <Epic activeStory={activeViewPanel.activeView} tabbar={
      <Tabbar>
        <TabbarItem
          onClick={() => action.nextPage({ activeView: "Home", activePanel: "Home" })}
          selected={activeViewPanel.activeView === 'Home'}
          data-story="Home"
          text="Профиль"
        ><Icon28UserCircleOutline /></TabbarItem>
        <TabbarItem
          onClick={() => action.nextPage({ activeView: "Job", activePanel: "Job" })}
          selected={activeViewPanel.activeView === 'Job'}
          data-story="Job"
          text="Заработок"
        ><Icon28MoneyWadOutline className="icon-add-post" /></TabbarItem>
        <TabbarItem
          onClick={() => action.nextPage({ activeView: "Entertainment", activePanel: "Entertainment" })}
          selected={activeViewPanel.activeView === 'Entertainment'}
          data-story="Entertainment"
          text="Развлечения"
        ><Icon28GameOutline /></TabbarItem>
        <TabbarItem
          onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Shop" })}
          selected={activeViewPanel.activeView === 'Shop'}
          data-story="Shop"
          text="Магазин"
        ><Icon28ShoppingCartOutline /></TabbarItem>
      </Tabbar>
    }>
      <View id="Home" activePanel={activeViewPanel.activePanel} popout={popout} modal={modals}>
        <Home id="Home" />
        <Panel id="Rating">Rating</Panel>
      </View>
      <View id="Job" activePanel={activeViewPanel.activePanel} popout={popout}>
        <Panel id="Job">Job</Panel>
      </View>
      <View id="Entertainment" activePanel={activeViewPanel.activePanel} popout={popout}>
        <Casino id="Entertainment" />
      </View>
      <View id="Shop" activePanel={activeViewPanel.activePanel} popout={popout}>
        <Panel id="Shop">Shop</Panel>
      </View>
    </Epic>
  )
}

export default App;