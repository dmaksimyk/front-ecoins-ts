import {
  Icon24MoneySendOutline,
  Icon24CubeBoxOutline,
  Icon24FavoriteOutline
} from '@vkontakte/icons'

import {
  Group,
  CardGrid,
  Card,
  Text
} from '@vkontakte/vkui'

const Menu = () => {
  return (
    <Group separator="auto">
      <CardGrid size="s">
        <Card className="Card__menu" >
          <div className="Menu">
            <Icon24FavoriteOutline width={28} height={28} />
            <Text className="menu-text" weight="regular">Рейтинг</Text>
          </div>
        </Card>
        <Card className="Card__menu">
          <div className="Menu">
            <Icon24MoneySendOutline width={28} height={28} />
            <Text className="menu-text" weight="regular">Перевести</Text>
          </div>
        </Card>
        <Card className="Card__menu">
          <div className="Menu">
            <Icon24CubeBoxOutline width={28} height={28} />
            <Text className="menu-text" weight="regular">Инвентарь</Text>
          </div>
        </Card>
      </CardGrid>
    </Group>
  )
};

export default Menu;