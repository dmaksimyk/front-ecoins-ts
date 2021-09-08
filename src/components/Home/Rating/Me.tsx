import { useRecoilValue } from "recoil";

import { Div, Card } from "@vkontakte/vkui";

import { User } from "./__components";

import { BALANCE, FIRST_LAST_NAME, ID, IMG, MY_RATING } from "engine/state";

const Me: React.FC = () => {
  const id = useRecoilValue(ID);
  const img = useRecoilValue(IMG);
  const balance = useRecoilValue(BALANCE);
  const rating = useRecoilValue(MY_RATING);
  const name = useRecoilValue(FIRST_LAST_NAME);

  return (
    <Div>
      <Card className="Rating__me" mode="shadow">
        <User
          disabled={true}
          id={id}
          img={img}
          balance={balance || "1 тыс."}
          position={rating}
          name={name || "NO NAME"}
          chevron={false}
        />
      </Card>
    </Div>
  );
};

export default Me;
