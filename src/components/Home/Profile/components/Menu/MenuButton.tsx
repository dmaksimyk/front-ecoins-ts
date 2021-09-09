import React from 'react';
import { Button, Div } from '@vkontakte/vkui';
import { useNavigation } from 'engine';

const MenuButton: React.FC = () => {
  const history = useNavigation();

  return (
    <Div style={{ padding: '0 0 12px 0' }}>
      <Button
        mode="secondary"
        stretched
        onClick={() => history.nextPage({ activePanel: 'Settings' })}
      >
        Настройки
      </Button>
    </Div>
  );
};

export default MenuButton;
