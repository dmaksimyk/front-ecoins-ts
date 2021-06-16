import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
// import { useAction } from 'engine';

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  Separator
} from '@vkontakte/vkui'

import {
  CLIENT
} from 'engine/state';

import {
  CardMyBalance,
  Filter
} from 'components'

type TProps = {
  id: string;
}

const Shop = ({ id }: TProps) => {
  const client = useRecoilValue(CLIENT);
  // const action = useAction();

  // eslint-disable-next-line
  useMemo(() => client.emit('GET_ITEMS'), [])

  return (
    <Panel id={id} >
      <PanelHeader separator={true}>
        <PanelHeaderContent status='Крутые шмотки только тут!' before={true} aside>
          Магазин
        </PanelHeaderContent>
      </PanelHeader>
      <CardMyBalance />
      <Filter />
      <Separator />
    </Panel >
  )
}

export default Shop