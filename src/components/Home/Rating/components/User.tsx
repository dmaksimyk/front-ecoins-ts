import { Icon16ChevronOutline, Icon16Fire } from "@vkontakte/icons";
import { Avatar, Card, SimpleCell } from "@vkontakte/vkui";
import {
  BALANCE,
  FIRST_LAST_NAME,
  IMG,
  MY_RATING,
  SYMBOLS_RUB,
} from "engine/state";
import { useRecoilValue } from "recoil";

type TProps = {
  img?: string;
  name?: string;
  balance?: string;
  rating?: number;
  type?: "ME" | "USER";
};

const RatingItemUser = ({
  img,
  name,
  rating,
  balance,
  type = "USER",
}: TProps) => {
  const myImg = useRecoilValue(IMG);
  const myBalance = useRecoilValue(BALANCE);
  const myRating = useRecoilValue(MY_RATING);
  const myName = useRecoilValue(FIRST_LAST_NAME);

  return (
    <Card
      mode="shadow"
      style={{
        overflow: "hidden",
      }}
    >
      <SimpleCell
        onClick={() => {
          console.log("id");
        }}
        before={
          <Avatar size={36} shadow={false} src={type === "ME" ? myImg : img} />
        }
        after={<Icon16ChevronOutline />}
        description={`Баланс: ${type === "ME" ? myBalance : balance + ' ' + SYMBOLS_RUB}`}
      >
        #{type === "ME" ? myRating : rating} | {type === "ME" ? myName : name}
      </SimpleCell>
    </Card>
  );
};

export default RatingItemUser;
