import { useRecoilValue } from 'recoil';

import {
  Title,
} from '@vkontakte/vkui'

import {
  Subscribe,
  SubDonut,
} from 'components'

import {
  DONUT,
  SUBSCRIBE_GROUP,
} from 'engine/state';

const UserMore = () => {
  const subscribe_group = useRecoilValue(SUBSCRIBE_GROUP)
  const donut = useRecoilValue(DONUT)

  if ((!subscribe_group && subscribe_group !== undefined) || !donut) {
    return (
      <div>
        <Title
          weight="semibold"
          level="3"
          style={{
            padding: "0 16px",
            paddingBottom: 10
          }}
        >Другое</Title>
        {
          (!subscribe_group && subscribe_group !== undefined) ?
            <Subscribe /> : null
        }
        {(!donut) ? <SubDonut /> : null}
      </div>
    )
  } else {
    return (<></>)
  }
}

export default UserMore