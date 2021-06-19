import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  Separator,
  Gallery
} from '@vkontakte/vkui'

import {
  CLIENT,
  SHOP,
  SUBNAVIGATION_BAR_SELECT
} from 'engine/state';

import {
  CardMyBalance,
  Filter
} from 'components'

import {
  Businesses,
  Promotions,
  Home,
  Cars,
  Clothes,
  Smartphones,
  Market,
} from './Panels'

type TProps = {
  id: string;
}

const Shop = ({ id }: TProps) => {
  const client = useRecoilValue(CLIENT);
  const shop = useRecoilValue(SHOP)
  const panel = useRecoilValue(SUBNAVIGATION_BAR_SELECT)

  const [arr, setArr] = useState<object[]>([])

  useEffect(() => {
    client.emit('GET_ITEMS')
    console.log('shop', 'load')

    return (() => {
      setArr([])
      console.log('shop', 'clear')
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setArr(shop.filter((item: any) => item.type === panel.selected))
  }, [panel, shop])

  return (
    <Panel id={id} className="Shop" >
      <PanelHeader separator={true}>
        <PanelHeaderContent status='Крутые шмотки только тут!' before={true} aside>
          Магазин
        </PanelHeaderContent>
      </PanelHeader>
      <CardMyBalance />
      <Filter />
      <Separator />
      <Gallery
        slideWidth="100%"
        style={{ marginLeft: 0, height: 'auto', cursor: 'default' }}
        align="left"
        slideIndex={panel.index}
      >
        <Businesses arr={arr} style={panel.index === 0 ? { height: 'auto' } : { height: 0 }} />
        <Promotions style={panel.index === 1 ? { height: 'auto' } : { height: 0 }} />
        <Home style={panel.index === 2 ? { height: 'auto' } : { height: 0 }} />
        <Cars style={panel.index === 3 ? { height: 'auto' } : { height: 0 }} />
        <Clothes style={panel.index === 4 ? { height: 'auto' } : { height: 0 }} />
        <Smartphones style={panel.index === 5 ? { height: 'auto' } : { height: 0 }} />
        <Market style={panel.index === 6 ? { height: 'auto' } : { height: 0 }} />
      </Gallery>
    </Panel >
  )
}

export default Shop