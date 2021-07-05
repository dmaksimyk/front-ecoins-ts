import {
  Panel,
} from '@vkontakte/vkui'

import {
  StyledPanelHeader,
  ArrowBackPage,
  TransferMain
} from 'components'

type TProps = {
  id: string;
}

const Transfer = ({ id }: TProps) => {
  return (
    <Panel id={id} >
      <StyledPanelHeader
        left={<ArrowBackPage />}
        caption="Переводы"
        status="Введите сумму перевода"
        separator={false}
      />
      <TransferMain />
    </Panel >
  )
}

export default Transfer