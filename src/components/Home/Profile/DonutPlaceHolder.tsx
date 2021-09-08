import { Icon16ChevronOutline, Icon16Fire } from "@vkontakte/icons";
import { Avatar, Card, Div, SimpleCell } from "@vkontakte/vkui";
import { SYMBOLS_RUB } from "engine/state";

const DonutPlaceHolder: React.FC = () => {
  return (
    <Div className="placeholder_paddings">
      <Card mode="shadow" className="DonutPlaceHolder_card placeholder__card_style">
        <SimpleCell
          onClick={() => {
            console.log("id");
          }}
          before={
            <Avatar
              style={{ background: "var(--destructive)" }}
              size={28}
              shadow={false}
            >
              <Icon16Fire fill="var(--white)" />
            </Avatar>
          }
          after={<Icon16ChevronOutline />}
          description={`Всего за 50 ${SYMBOLS_RUB} в месяц!`}
        >
          Стань Donut подписчиком!
        </SimpleCell>
      </Card>
    </Div>
  );
};

export default DonutPlaceHolder;
