import { useRecoilValue } from 'recoil';

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
} from '@vkontakte/vkui'

import {
  CardMyBalance,
  ShopItems,
} from 'components'

import {
  SYMBOLS_RUB,
  GET_BUSINESSES,
} from 'engine/state';

type TProps = {
  id: string;
}

const Businesses = ({ id }: TProps) => {
  const getBusinesses = useRecoilValue(GET_BUSINESSES)

  return (
    <Panel id={id} >
      <PanelHeader separator={true}>
        <PanelHeaderContent status='Пассивный заработок - это про бизнесы!' before={true} aside>
          Бизнесы
        </PanelHeaderContent>
      </PanelHeader>
      <CardMyBalance />
      {getBusinesses.map((item: any) => <ShopItems key={`id${item.id}`} img={item.img} title={item.title} status={`Доходность: ${item.earningsString} ${SYMBOLS_RUB}/час`} />)}
    </Panel >
  )
}

export default Businesses