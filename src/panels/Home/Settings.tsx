import {
  Panel, PanelProps,
} from '@vkontakte/vkui'

import {
  StyledPanelHeader,
  ArrowBackPage
} from 'components/UI'

const Settings: React.FC<PanelProps> = ({ id }) => {
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