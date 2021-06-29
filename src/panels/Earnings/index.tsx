import {
  Panel,
} from '@vkontakte/vkui'

import { 
  StyledPanelHeader,
  EarningsHomePage 
} from 'components'

type TProps = {
  id: string;
}

const Job = ({id}: TProps) => {
  return (
    <Panel id={id}>
      <StyledPanelHeader 
        caption="Заработок" 
        status="Здесь пахнет деньгами"
      />
      <EarningsHomePage />
    </Panel>
  )
}

export default Job