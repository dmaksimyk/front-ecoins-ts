import { useRecoilValue } from "recoil";
import bridge from "@vkontakte/vk-bridge";
import { Icon16UserAdd, Icon16ChevronOutline } from "@vkontakte/icons";
import { Card, Div, SimpleCell, Avatar } from "@vkontakte/vkui";
import { CLIENT, SUBSCRIBE_GROUP, SYMBOLS_RUB } from "engine/state";

const SubscribePlaceHolder: React.FC = () => {
  const client = useRecoilValue(CLIENT);
  const subscribe_group = useRecoilValue(SUBSCRIBE_GROUP);

  return (
    <Div className="placeholder_paddings">
      <Card
        mode="shadow"
        className="SubscribePlaceHolder__card placeholder__card_style"
      >
        <SimpleCell
          onClick={() => {
            if (!subscribe_group && subscribe_group !== undefined) {
              bridge
                .send("VKWebAppJoinGroup", {
                  group_id: 204463745,
                })
                .then((data: any) => {
                  if (data.result) {
                    console.log("result:", data.result);
                    client.emit("SUBSCRIBE_GROUP");
                  }
                })
                .catch((err) =>
                  console.log(
                    "Подписка на группу:",
                    "пользователь отменил подписку"
                  )
                );
            } else console.log("err");
          }}
          before={
            <Avatar
              style={{ background: "var(--dynamic_green)" }}
              size={28}
              shadow={false}
            >
              <Icon16UserAdd fill="var(--white)" />
            </Avatar>
          }
          after={<Icon16ChevronOutline />}
          description={`И получи 15 тыс. ${SYMBOLS_RUB} =)`}
        >
          Подпишись на нас!
        </SimpleCell>
      </Card>
    </Div>
  );
};

export default SubscribePlaceHolder;
