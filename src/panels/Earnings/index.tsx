import {
  Panel,
} from '@vkontakte/vkui'

import { 
  StyledPanelHeader 
} from 'components'

type TProps = {
  id: string;
}

const Job = ({id}: TProps) => {
  return (
    <Panel id={id}>
      <StyledPanelHeader 
        caption="Заработок" 
        status="Здесь запах денег"
      />
    </Panel>
  )
}

export default Job