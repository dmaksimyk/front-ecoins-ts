import {
  Card
} from '@vkontakte/vkui'

import {
  Avatar,
  Text,
  Div,
  Button
} from '@vkontakte/vkui';

type TProps = {
  img: string;
  title: string;
  status: string;
}

const ShopItems = ({ img, title, status }: TProps) => {
  return (
    <Div style={{ paddingBottom: 0 }}>
      <Card className="ShopItems" style={{ padding: '6px 12px' }} mode="outline">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ borderRadius: '100%', overflow: 'hidden' }}>
            <Avatar src={img} alt='' size={36} />
          </div>
          <div style={{ marginLeft: 12 }}>
            <Text weight="regular">Название: {title}</Text>
            <Text weight="regular" style={{ color: 'var(--text_subhead)' }}>{status}</Text>
          </div>
          <Button mode="outline" style={{ padding: 2, position: 'absolute', right: 0 }}>Купить</Button>
        </div>
      </Card>
    </Div>
  )
}

export default ShopItems;