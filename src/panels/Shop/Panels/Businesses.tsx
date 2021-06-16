import { useRecoilValue } from 'recoil';

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
} from '@gmelum/vkui'

import {
  CardMyBalance,
  ShopItems
} from 'components'

import { 
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
      {getBusinesses.map((item: any) => <ShopItems key={`id${item.id}`} img={item.img} title={item.title} status={`Доходность: ${item.earningsString} р/час`} />)}
    </Panel >
  )
}

export default Businesses