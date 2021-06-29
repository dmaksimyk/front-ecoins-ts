import {
  Icon24MoneySendOutline,
  Icon24CubeBoxOutline,
  Icon24FavoriteOutline,
} from '@vkontakte/icons'

import {
  Div,
} from '@vkontakte/vkui'

import {
  MenuCards,
  MenuButton
} from './components';

const Menu = () => {
  return (
    <Div style={{ paddingBottom: 6 }} className="Card__menu" >
      <MenuButton />
      <MenuCards
        img={<Icon24FavoriteOutline />}
        text='Рейтинг'
        event={() => console.log('Рейтинг')}
      />
      <MenuCards
        img={<Icon24MoneySendOutline />}
        text='Перевод'
        event={() => console.log('Перевод')}
      />
      <MenuCards
        img={<Icon24CubeBoxOutline />}
        text='Инвентарь'
        event={() => console.log('Инвентарь')}
      />
    </Div>
  )
};

export default Menu;