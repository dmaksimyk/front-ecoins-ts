import React from 'react';
import { Alert } from '@vkontakte/vkui';
import { useNavigation } from 'engine';

const AlertOk: React.FC<{ caption: string }> = ({ caption }) => {
  const nav = useNavigation();
  return (
    <Alert
      actions={[
        {
          title: 'Ок',
          autoclose: true,
          mode: 'default',
        },
      ]}
      onClose={() => nav.backPage()}
    >
      {caption}
    </Alert>
  );
};

export default AlertOk;
