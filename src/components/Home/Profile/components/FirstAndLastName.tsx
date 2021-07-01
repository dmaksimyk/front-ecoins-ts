import { useRecoilValue } from 'recoil';

import {
  ID,
  FIRST_LAST_NAME,
} from 'engine/state';

import {
  Title,
  Text
} from '@vkontakte/vkui'

const Name = () => {
  const id = useRecoilValue(ID);
  const userName = useRecoilValue(FIRST_LAST_NAME);

  return (
    <div className="name-container">
      <Title
        className="name-container__text-name"
        level="2"
        weight="medium"
      >{userName}</Title>
      <Text
        className="name-container__text-id"
        style={{ marginBottom: 0, marginTop: 8 }}
        weight="regular"
      > ID: {id}</Text>
    </div>
  )
}

export default Name;