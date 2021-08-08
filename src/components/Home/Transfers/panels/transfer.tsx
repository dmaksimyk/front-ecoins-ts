import { Div, FormItem, FormStatus, InfoRow, Spinner } from "@vkontakte/vkui";
import { TRANSFER_ID, TRANSFER_NAME, USER_TOKEN } from "engine/state";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TransferHeader } from "../components";
import bridge from "@vkontakte/vk-bridge";

const Transfer = () => {
  // eslint-disable-next-line
  const [name, setName] = useState<string>("123");
  const setGlobalName = useSetRecoilState(TRANSFER_NAME);
  const userToken = useRecoilValue(USER_TOKEN);
  const id = useRecoilValue(TRANSFER_ID);

  useEffect(() => {
    if (id && userToken.length > 10) {
      bridge
        .send("VKWebAppCallAPIMethod", {
          method: "users.get",
          params: {
            user_ids: `${id}`,
            name_case: "dat",
            v: "5.131",
            access_token: userToken,
          },
        })
        .then((data) => {
          let getName =
            data.response[0].first_name !== "DELETED"
              ? `${data.response[0].first_name} ${data.response[0].last_name}`
              : "";
          setName(getName);
          setGlobalName(getName);
        })
        .catch(() => {
          setName("");
          setGlobalName("");
        });
    }

    return () => setGlobalName("");
    // eslint-disable-next-line
  }, []);

  if (userToken.length < 10) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <FormItem>
          <FormStatus header="Обратите внимание" mode="error">
            Внимательно проверяйте идентификатор и имя получателя! В случае ошибки,
            администрация, не возвращает валюту.
          </FormStatus>
        </FormItem>
        <Div>
          <InfoRow header="Идентификатор">
            {id}
          </InfoRow>
          <InfoRow header="Получатель" style={{ marginTop: 16 }}>
            {name === "" ? (
              <Spinner style={{ width: 16 }} size="small" />
            ) : (
              name
            )}
          </InfoRow>
          <InfoRow header="Сумма:" style={{ marginTop: 16 }}>
            <TransferHeader />
          </InfoRow>
        </Div>
      </>
    );
  }
};

export default Transfer;
