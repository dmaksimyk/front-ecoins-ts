import { useRecoilValue } from 'recoil';
import { useAction } from 'engine';

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  SimpleCell
} from '@gmelum/vkui'

import {
  Icon28WorkOutline,
  Icon28SmartphoneOutline,
  Icon28TicketOutline,
  Icon28TshirtOutline,
  Icon28CarOutline,
  Icon28HomeOutline
} from '@vkontakte/icons';

import {
  CLIENT
} from 'engine/state';

import {
  CardMyBalance
} from 'components'

type TProps = {
  id: string;
}

const Shop = ({ id }: TProps) => {
  const client = useRecoilValue(CLIENT);
  const action = useAction();
  client.emit('GET_ITEMS')

  return (
    <Panel id={id} >
      <PanelHeader separator={true}>
        <PanelHeaderContent status='Крутые шмотки только тут!' before={true} aside>
          Магазин
        </PanelHeaderContent>
      </PanelHeader>
      <CardMyBalance />
      <SimpleCell
        onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Businesses" })}
        expandable
        before={<Icon28WorkOutline />}
      >Бизнесы</SimpleCell>
      <SimpleCell
        onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Promotions" })}
        expandable
        before={<Icon28TicketOutline />}
      >Акции</SimpleCell>
      <SimpleCell
        onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Home" })}
        expandable
        before={<Icon28HomeOutline />}
      >Дома и квартиры</SimpleCell>
      <SimpleCell
        onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Cars" })}
        expandable
        before={<Icon28CarOutline />}
      >Машины</SimpleCell>
      <SimpleCell
        onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Clothes" })}
        expandable
        before={<Icon28TshirtOutline />}
      >Одежда</SimpleCell>
      <SimpleCell
        onClick={() => action.nextPage({ activeView: "Shop", activePanel: "Smartphones" })}
        expandable
        before={<Icon28SmartphoneOutline />}
      >Смартфоны</SimpleCell>
    </Panel >
  )
}

export default Shop