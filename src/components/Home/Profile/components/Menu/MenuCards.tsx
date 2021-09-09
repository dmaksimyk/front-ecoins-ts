import React, { ReactNode } from 'react';
import { useNavigation } from 'engine';
import { Button, Text } from '@vkontakte/vkui';

const MenuCards: React.FC<{
  img: ReactNode;
  text: string;
  nextPage: 'Rating' | 'Transfer' | 'Inventory';
}> = ({ img, text, nextPage }) => {
  const history = useNavigation();

  return (
    <Button
      className="MenuСards__card"
      mode="tertiary"
      onClick={() => history.nextPage({ activePanel: nextPage })}
    >
      <div className="MenuСards__img">{img}</div>
      <Text
        className="MenuСards__text dell-select"
        weight="regular"
      >
        {text}
      </Text>
    </Button>
  );
};

export default MenuCards;
