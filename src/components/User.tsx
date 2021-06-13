import {
  Separator,
  Group,
  Avatar,
  Title,
  MiniInfoCell,
  Text
} from '@gmelum/vkui'

import {
  Icon20Info,
  Icon20MoneyCircleOutline,
  Icon20Stars,
  Icon12StarCircle,
  Icon20FavoriteOutline,
} from '@vkontakte/icons'
import { ReactNode } from 'react'

type Props = {
  first_name: string,
  last_name: string,
  img: string,
  balance: string,
  level: string,
  id: number,
  online: string,
  donut: boolean,
  container: ReactNode
}

const User = ({ first_name, last_name, img, balance, level, id, online, container, donut }: Props) => {
  return (
    <Group className="User" separator="hide">
      <div className="User__container">
        <div className="User__avatar">
          {donut ? <Icon12StarCircle className="User__donut_icon" /> : ''} 
          <Avatar className="User__avatar" src={img} alt='' size={64} />
        </div>
        <div className="User__info" style={{ height: 64, display: 'flex', alignItems: 'center' }}>
          <div className="User__info__container">
            <Title className="User__name" style={{ paddingTop: 0 }} level="2" weight="medium">{`${first_name === '' ? 'No' : first_name} ${last_name === '' ? 'Name' : last_name}`}</Title>
            <Text className="User__text" style={{ marginBottom: 0, marginTop: 8 }} weight="regular"> ID: {id}</Text>
          </div>
        </div>
      </div>
      {container}
      <Separator style={{margin: '12px 0'}}/>
      <MiniInfoCell key={balance} before={<Icon20MoneyCircleOutline />} > Баланс: {balance === "NO_BALANCE" ? '0' : balance} ₽ </MiniInfoCell>
      <MiniInfoCell key={level} before={<Icon20Stars />} > Уровень: {level === "NO_LEVEL" ? '1 (0/100 exp)' : level} </MiniInfoCell>
      <MiniInfoCell key={'rating'} before={<Icon20FavoriteOutline />} > Место в рейтинге: 100 место </MiniInfoCell>
      <MiniInfoCell key={'moreInfo'} before={<Icon20Info />} mode="more" onClick={() => console.log("click more info")}> Подробная информация </MiniInfoCell>
      <Separator style={{margin: '8px 0'}}/>
    </Group>
  )
}

export default User