/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Panel, PanelProps } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import { StyledPanelHeader, ArrowBackPage } from 'components/UI';
import { TransferMain } from 'components/Home/Transfers';
import { USER_TOKEN } from 'engine/state';
import { useSetRecoilState } from 'recoil';
import { useNavigation } from 'engine';

const Transfer: React.FC<PanelProps> = ({ id }) => {
  const navigation = useNavigation();
  const setToken = useSetRecoilState(USER_TOKEN);

  useEffect(() => {
    bridge
      .send('VKWebAppGetAuthToken', { app_id: 7824036, scope: '' })
      .then((data) => setToken(data.access_token))
      .catch((err) => {
        console.log(err);
        navigation.backPage();
      });
  }, [setToken, navigation]);

  return (
    <Panel id={id}>
      <StyledPanelHeader
        left={<ArrowBackPage />}
        caption="Переводы"
        status="Введите сумму перевода"
      />
      <TransferMain />
    </Panel>
  );
};

export default Transfer;
