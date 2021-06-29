import { useAction } from 'engine';

import { MiniInfoCell } from '@vkontakte/vkui'

import { Icon20Info } from '@vkontakte/icons'


const OpenMoreInfo = () => {
  const action = useAction()

  return (
    <MiniInfoCell
      key='moreInfo'
      before={<Icon20Info />}
      mode="more" onClick={() => action.setModal('seeUserMore')}
    > Подробная информация </MiniInfoCell>
  )
}

export default OpenMoreInfo