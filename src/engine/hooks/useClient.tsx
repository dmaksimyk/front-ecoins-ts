import { useSetRecoilState, useRecoilValue } from 'recoil';
import * as state from 'engine/state';
import { useEffect } from 'react';
import { CustomLoader } from 'components';
import {
  START_APP,
  TBusiness,
  TTransfer,
  TJob
} from 'engine/types'
import bridge from '@vkontakte/vk-bridge'

const useClient = () => {
  let client = useRecoilValue(state.CLIENT);

  const setCheckin = useSetRecoilState(state.CHECKIN)
  const setOnlineUser = useSetRecoilState(state.ONLINE_USER);
  const setBalance = useSetRecoilState(state.BALANCE)
  const setExp = useSetRecoilState(state.EXP)
  const setBonus = useSetRecoilState(state.BONUS)
  const setDonut = useSetRecoilState(state.DONUT);
  const setBlocked = useSetRecoilState(state.BLOCKED);
  const setMyRating = useSetRecoilState(state.MY_RATING);
  const setTransfer = useSetRecoilState(state.TRANSFER)
  const setBusiness = useSetRecoilState(state.MY_BUSINESS)
  const setJob = useSetRecoilState(state.MY_JOB)

  const setImg = useSetRecoilState(state.IMG);
  const setId = useSetRecoilState(state.ID);
  const setName = useSetRecoilState(state.FIRST_LAST_NAME);
  const setPopout = useSetRecoilState(state.POPOUT);

  useEffect(() => {
    setPopout(<CustomLoader />)
    client.on("connect", () => {
      bridge.send('VKWebAppGetUserInfo')
        .then((data) => {
          setPopout(undefined)
          setName(`${data.first_name} ${data.last_name}`)
          setId(data.id)
          setImg(data.photo_200)
        })
        .catch(() => {
          setName(`Err Err`)
        })
    });
    client.on("connect_error", (err) => setPopout(<CustomLoader />));
    client.on("disabled", (err) => setPopout(<CustomLoader />));

    client.on("START_APP", (data: START_APP) => {
      data.checkin && setCheckin(data.checkin)
      data.online && setOnlineUser(data.online)
      data.balance && setBalance(data.balance)
      data.exp && setExp(data.exp)
      data.bonus && setBonus(data.bonus)
      data.donut && setDonut(data.donut)
      data.blocked && setBlocked(data.blocked)
      data.rating && setMyRating(data.rating)
      data.transfer && setTransfer(data.transfer)
      data.business && setBusiness(data.business)
      data.job && setJob(data.job)
    })

    client.on("ONLINE_USER", (data: string) => data && setOnlineUser(data))
    client.on("BALANCE", (data: string) => data && setBalance(data))
    client.on("EXP", (data: string) => data && setExp(data))
    client.on("BONUS", (data: string) => data && setExp(data))
    client.on("BLOCKED", (data: boolean) => data && setBlocked(data))
    client.on("TRANSFER", (data: TTransfer) => data && setTransfer(data))
    client.on("BUSINESS", (data: TBusiness) => data && setBusiness(data))
    client.on("JOB", (data: TJob) => data && setJob(data))

    // Ping
    window.setInterval(() => {
      client.emit("PING", {});
    }, 5000);

    // eslint-disable-next-line
  }, [])
  return client;
}

export default useClient;