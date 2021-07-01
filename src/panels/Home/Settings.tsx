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

const Settings = ({ id }: TProps) => {
  return (
    <Panel id={id} >
      <StyledPanelHeader
        left={<ArrowBackPage />}
        caption="Настройки"
        status="Настрой все как хочется тебе!"
        separator={false}
      />
    </Panel >
  )
}

export default Settings