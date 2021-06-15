import { useAction } from 'engine';
import { useRecoilValue } from 'recoil';

import { ReactNode } from 'react'

import {
  BALANCE,
  ID,
  FIRST_LAST_NAME,
  DONUT,
  EXP,
  IMG
} from 'engine/state';

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
} from '@vkontakte/icons'

type Props = {
  container: ReactNode
}

const User = ({ container }: Props) => {
  const action = useAction()
  const id = useRecoilValue(ID);
  const balance = useRecoilValue(BALANCE);
  const donut = useRecoilValue(DONUT);
  const img = useRecoilValue(IMG);
  const userName = useRecoilValue(FIRST_LAST_NAME);
  const exp = useRecoilValue(EXP)

  return (
    <Group className="User" separator="hide">
      <div className="User__container">
        <div className="User__avatar">
          {donut ? <Icon12StarCircle className="User__donut_icon" /> : ''} 
          <Avatar className="User__avatar" src={img} alt='' size={64} />
        </div>
        <div className="User__info" style={{ height: 64, display: 'flex', alignItems: 'center' }}>
          <div className="User__info__container">
            <Title className="User__name" style={{ paddingTop: 0 }} level="2" weight="medium">{userName}</Title>
            <Text className="User__text" style={{ marginBottom: 0, marginTop: 8 }} weight="regular"> ID: {id}</Text>
          </div>
        </div>
      </div>
      {container}
      <Separator style={{margin: '12px 0'}}/>
      <MiniInfoCell key='balance' before={<Icon20MoneyCircleOutline />} > Баланс: {balance} </MiniInfoCell>
      <MiniInfoCell key='exp' before={<Icon20Stars />} > Уровень: {exp} </MiniInfoCell>
      <MiniInfoCell key='moreInfo' before={<Icon20Info />} mode="more" onClick={() => action.setModal('seeUserMore')}> Подробная информация </MiniInfoCell>
      <Separator style={{margin: '8px 0'}}/>
    </Group>
  )
}

export default User