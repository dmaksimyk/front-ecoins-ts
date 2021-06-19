import {
  Card, Separator
} from '@vkontakte/vkui'

import {
  Text,
  Button
} from '@vkontakte/vkui';

import { Avatar } from 'components'

type TProps = {
  img: string;
  title: string;
  requirements: string;
  status: string;
}

const ShopItems = ({ img, title, requirements, status}: TProps) => {
  return (
      <Card className="ShopItems" style={{ margin: 12 }} mode="outline">
        <div style={{ display: 'flex', alignItems: 'center', padding: 6 }}>
          <Avatar img={img} size={56} />
          <div style={{ marginLeft: 12 }}>
            <Text weight="regular">Название: {title}</Text>
            <Text weight="regular" style={{ color: 'var(--text_subhead)' }}>{requirements}</Text>
            <Text weight="regular" style={{ color: 'var(--text_subhead)' }}>{status}</Text>
          </div>
        </div>
        <Separator />
        <div style={{ padding: '8px' }}>
          <Button
            mode="outline"
            stretched
          >Купить</Button>
        </div>
      </Card>
  )
}

export default ShopItems;