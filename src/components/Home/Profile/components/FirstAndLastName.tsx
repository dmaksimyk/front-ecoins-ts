import React from 'react';
import { useRecoilValue } from 'recoil';
import { ID, FIRST_LAST_NAME } from 'engine/state';
import { Title, Text } from '@vkontakte/vkui';

const FirstAndLastName: React.FC = () => {
  const id = useRecoilValue(ID);
  const userName = useRecoilValue(FIRST_LAST_NAME);

  return (
    <div className="name__container">
      <Title
        className="name__text"
        level="2"
        weight="medium"
      >
        {userName}
      </Title>
      <Text
        className="name__text name__text_id"
        style={{ marginBottom: 0, marginTop: 8 }}
        weight="regular"
      >
        ID:
        {id}
      </Text>
    </div>
  );
};

export default FirstAndLastName;
