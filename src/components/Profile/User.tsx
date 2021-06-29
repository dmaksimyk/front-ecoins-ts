import { ReactNode } from 'react'

import {
  Separator,
  Group,
  Div,
} from '@vkontakte/vkui'

import {
  Avatar,
  FirstAndLastName,
  Informations
} from './components';

type Props = {
  container: ReactNode
}

const User = ({ container }: Props) => {
  return (
    <Group className="user" style={{ paddingBottom: 0 }} separator="hide">
      <Div className="user-container__name-and-avatar">
        <Avatar />
        <FirstAndLastName />
      </Div>
      {container}
      <Separator className="user-container__separator" />
      <Informations />
      <Separator className="user-container__separator" />
    </Group>
  )
}

export default User