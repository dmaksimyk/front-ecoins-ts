import { useRecoilValue } from 'recoil';

import { EXP } from 'engine/state';

import { MiniInfoCell } from '@vkontakte/vkui'

import { Icon20Stars } from '@vkontakte/icons'

const MyExp = () => {
  const exp = useRecoilValue(EXP)

  return (
    <MiniInfoCell
      key='exp'
      before={<Icon20Stars />}
    > Уровень: {exp} </MiniInfoCell>
  )
}

export default MyExp