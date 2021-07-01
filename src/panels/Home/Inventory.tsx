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

const Inventory = ({ id }: TProps) => {
  return (
    <Panel id={id} >
      <StyledPanelHeader
        left={<ArrowBackPage />}
        caption="Инвентарь"
        status="Всё ваше имущество только здесь!"
        separator={false}
      />
    </Panel >
  )
}

export default Inventory