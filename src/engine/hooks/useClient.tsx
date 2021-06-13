import { useSetRecoilState, useRecoilValue } from 'recoil';
import * as state from 'engine/state';
import { useEffect } from 'react';
import { useAction, useCall } from 'engine';
import { CustomLoader } from 'components'

const useClient = () => {
  const client = useRecoilValue(state.CLIENT);
  const action = useAction();
  const setDonut = useSetRecoilState(state.DONUT);
  const setPopout = useSetRecoilState(state.POPOUT);
  const setBlocked = useSetRecoilState(state.BLOCKED);
  const setOnlineUser = useSetRecoilState(state.ONLINE_USER);

  let timer: any = undefined;

  useEffect(() => {

    // client.on("START_PARAM", (data) => data.donut && setDonut(data.donut))
    client.on("BLOCKED", (data) => { setBlocked(data) });
    // client.on("connect_error", (err) => setPopout(<CustomLoader />));
    // client.on("disconnect", () => setPopout(<CustomLoader />));
    // client.on("connect", () => setPopout(undefined));
   
    client.on("ONLINE_USER", (data: string) => data && setOnlineUser(data))

    // Ping
    window.setInterval(() => {
      client.emit("PING", {});
    }, 5000);

  }, [])
  return client;
}

export default useClient;