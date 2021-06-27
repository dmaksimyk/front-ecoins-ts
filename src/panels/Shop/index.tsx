import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  Separator,
} from '@vkontakte/vkui'

import {
  CardMyBalance,
  Filter,
  Slider
} from 'components'
import { SHOP } from 'engine/state'
import { useRecoilValue } from 'recoil'

type TProps = {
  id: string;
}

const Shop = ({ id }: TProps) => {
  const shop = useRecoilValue(SHOP)

  return (
    <Panel id={id} className="Shop" >
      <PanelHeader
        separator={true}

      >
        <PanelHeaderContent
          status='Крутые шмотки только тут!'
          before={true}
          aside
        >
          Магазин
        </PanelHeaderContent>
      </PanelHeader>
      <CardMyBalance />
      {
        shop.length > 1 ? [
          <Filter key="Shop_filter" />,
          <Separator key="Shop_separator" />
        ] : null
      }
      <Slider />
    </Panel >
  )
}

export default Shop