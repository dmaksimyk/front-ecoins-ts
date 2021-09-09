/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSetRecoilState, useRecoilValue } from 'recoil';
import * as state from 'engine/state';
import React, { useEffect } from 'react';
import { ClientConnector, FirstLoader } from 'components/Loaders';
import {
  START_APP, TBusiness, TTransfer, TJob,
} from 'engine/types';
import bridge from '@vkontakte/vk-bridge';
import { useCallbackState, useNavigation } from 'engine';

const useClient = () => {
  const navigation = useNavigation();
  const client = useRecoilValue(state.CLIENT);
  const setCheckin = useSetRecoilState(state.CHECKIN);
  const setSubscribeGroup = useSetRecoilState(state.SUBSCRIBE_GROUP);
  const setOnlineUser = useSetRecoilState(state.ONLINE_USER);
  const setBalance = useSetRecoilState(state.BALANCE);
  const setExp = useSetRecoilState(state.EXP);
  const setBonus = useSetRecoilState(state.BONUS);
  const setDonut = useSetRecoilState(state.DONUT);
  const setBlocked = useSetRecoilState(state.BLOCKED);
  const setMyRating = useSetRecoilState(state.MY_RATING);
  const setTransfer = useSetRecoilState(state.TRANSFER);
  const setBusiness = useSetRecoilState(state.MY_BUSINESS);
  const setJob = useSetRecoilState(state.MY_JOB);

  const setImg = useSetRecoilState(state.IMG);
  const setId = useSetRecoilState(state.ID);
  const setName = useSetRecoilState(state.FIRST_LAST_NAME);
  const [popout] = useCallbackState(state.ACTIVE_POPOUT);
  const [screenMount, setScreenMount] = useCallbackState(state.SCREEN_MOUNT);

  const setShop = useSetRecoilState(state.SHOP);

  useEffect(() => {
    screenMount().then((data: boolean) => {
      if (!data) {
        console.log('loaded not mounted');
        navigation.nextPage({
          activePopout: <FirstLoader />,
          ignoreBack: true,
        });
        setScreenMount(true);
      } else console.log('loaded mounted');
    });

    client.on('connect', () => bridge.send('VKWebAppGetUserInfo')
      .then((data) => {
        setName(`${data.first_name} ${data.last_name}`);
        setId(data.id);
        setImg(data.photo_200);

        popout().then((data) => {
          (data as any)?.type?.type !== 'FirstLoader'
            && data
            && navigation.backPage(true, true);
        });
      }));

    client.on('connect_error', () => navigation.nextPage({
      activePopout: <ClientConnector />,
      ignoreBack: true,
    }));
    client.on('disabled', () => navigation.nextPage({
      activePopout: <ClientConnector />,
      ignoreBack: true,
    }));

    client.on('START_APP', (data: START_APP) => {
      setSubscribeGroup(data.subscribe);

      data.checkin && setCheckin(data.checkin);
      data.online && setOnlineUser(data.online);
      data.balance && setBalance(`${data.balance} ${state.SYMBOLS_RUB}`);
      data.exp && setExp(data.exp);
      data.bonus && setBonus(data.bonus);
      data.donut && setDonut(data.donut);
      data.blocked && setBlocked(data.blocked);
      data.rating && setMyRating(data.rating);
      data.transfer && setTransfer(data.transfer);
      data.business && setBusiness(data.business);
      data.job && setJob(data.job);
    });

    client.on('ONLINE_USER', (data: string) => data && setOnlineUser(data));
    client.on(
      'BALANCE',
      (data: string) => data && setBalance(`${data} ${state.SYMBOLS_RUB}`),
    );
    client.on('EXP', (data: string) => data && setExp(data));
    client.on('BONUS', (data: string) => data && setExp(data));
    client.on('BLOCKED', (data: boolean) => data && setBlocked(data));
    client.on('TRANSFER', (data: TTransfer) => data && setTransfer(data));
    client.on('BUSINESS', (data: TBusiness) => data && setBusiness(data));
    client.on('JOB', (data: TJob) => data && setJob(data));

    client.on('SHOP', (data: any) => data && setShop(data));

    client.on(
      'SUBSCRIBE_GROUP',
      (data: boolean) => data && setSubscribeGroup(data),
    );

    window.setInterval(() => {
      client.emit('PING', {});
    }, 15000);
    // eslint-disable-next-line
  }, []);
  return client;
};

export default useClient;
