import {
  Panel,
  Separator
} from '@vkontakte/vkui'

import {
  StyledPanelHeader,
  ArrowBackPage,
  RatingMe,
  RatingUsers,
} from 'components'

type TProps = {
  id: string;
}

const Rating = ({ id }: TProps) => {
  return (
    <Panel id={id} >
      <StyledPanelHeader
        left={<ArrowBackPage />}
        caption="Рейтинг"
        status="Стань лучшим среди лучших!"
      />
      <RatingMe />
      <Separator />
      <RatingUsers />
    </Panel >
  )
}

export default Rating