import { useRecoilValue } from 'recoil'

import {
  Panel,
  Separator,
} from '@vkontakte/vkui'

import {
  CardMyBalance,
  Filter,
  Slider,
  StyledPanelHeader
} from 'components'
import { 
  SHOP 
} from 'engine/state'

type TProps = {
  id: string;
}

const Shop = ({ id }: TProps) => {
  const shop = useRecoilValue(SHOP)

  return (
    <Panel id={id} className="Shop" >
      <StyledPanelHeader 
        caption="Магазин"
        status="Крутые шмотки только тут"
      />
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