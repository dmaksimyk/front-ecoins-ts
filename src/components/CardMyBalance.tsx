import { useRecoilValue } from 'recoil';

import {
  BALANCE
} from 'engine/state'

import {
  Icon20MoneyCircleOutline,
} from '@vkontakte/icons'

import {
  Card, Separator, MiniInfoCell, Div
} from '@gmelum/vkui'

const CardMyBalance = () => {
  const balance = useRecoilValue(BALANCE)
  return (
    <div>
      <Div>
        <Card style={{ padding: '6px 0' }} mode="outline" >
          <MiniInfoCell key='exp' before={<Icon20MoneyCircleOutline />} > Баланс: {balance} </MiniInfoCell>
        </Card>
      </Div>
      <Separator />
    </div>
  )
}

export default CardMyBalance;