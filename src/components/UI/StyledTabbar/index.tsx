import { Tabbar } from '@vkontakte/vkui'
import StyledTabbarItem from './components/TabbarItem'

import {
  Icon28UserCircleOutline,
  Icon28GameOutline,
  Icon28MoneyWadOutline,
  Icon28ShoppingCartOutline
} from '@vkontakte/icons'

const StyledTabbar: React.FC = () => {
  return (
    <Tabbar>
      <StyledTabbarItem 
        text="Главная" 
        page="Home" 
        icon={<Icon28UserCircleOutline />} 
      />
      <StyledTabbarItem 
        text="Заработок" 
        page="Earnings" 
        icon={<Icon28MoneyWadOutline />} 
      />
      <StyledTabbarItem 
        text="Развлечения" 
        page="Entertainment" 
        icon={<Icon28GameOutline />} 
      />
      <StyledTabbarItem 
        text="Магазин" 
        page="Shop" 
        icon={<Icon28ShoppingCartOutline />} 
      />
    </Tabbar>
  )
}

export default StyledTabbar