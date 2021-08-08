import { Panel } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import { StyledPanelHeader, ArrowBackPage, TransferMain } from "components";
import { USER_TOKEN } from "engine/state";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigation } from "engine";

type TProps = {
  id: string;
};

const Transfer = ({ id }: TProps) => {
  const navigation = useNavigation();
  const setToken = useSetRecoilState(USER_TOKEN);

  useEffect(() => {
    bridge
      .send("VKWebAppGetAuthToken", { app_id: 7824036, scope: "" })
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
        separator={false}
      />
      <TransferMain />
    </Panel>
  );
};

export default Transfer;
