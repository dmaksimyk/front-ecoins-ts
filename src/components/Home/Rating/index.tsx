import { Div, Card } from "@vkontakte/vkui";
import { RATING } from "engine/state";
import { TRating } from "engine/types";
import { useRecoilValue } from "recoil";

import { User } from "./components";

const Users = () => {
  const users = useRecoilValue(RATING);

  return (
    <Div>
      <Card
        mode="shadow"
        style={{
          overflow: "hidden",
        }}
      >
        {users.map((item: TRating, index) => (
          <User
            key={item.id + index}
            id={item.id}
            img={item.img}
            name={item.name}
            position={index + 1}
            balance={item.balance}
          />
        ))}
      </Card>
    </Div>
  );
};

export default Users;
