import React from 'react';
import {
  Icon24MoneySendOutline,
  Icon24CubeBoxOutline,
  Icon24FavoriteOutline,
} from '@vkontakte/icons';
import { Div } from '@vkontakte/vkui';
import { MenuCards, MenuButton } from './components';

const Menu: React.FC = () => (
  <Div className="Menu">
    <MenuButton />
    <MenuCards
      img={<Icon24FavoriteOutline />}
      text="Рейтинг"
      nextPage="Rating"
    />
    <MenuCards
      img={<Icon24MoneySendOutline />}
      text="Перевод"
      nextPage="Transfer"
    />
    <MenuCards
      img={<Icon24CubeBoxOutline />}
      text="Инвентарь"
      nextPage="Inventory"
    />
  </Div>
);

export default Menu;
