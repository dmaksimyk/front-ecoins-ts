import {
  Panel,
} from '@vkontakte/vkui'

import {
  StyledPanelHeader,
  ArrowBackPage
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
        status="5% комиссии =)"
        separator={false}
      />
    </Panel >
  )
}

export default Transfer