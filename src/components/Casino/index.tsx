import { useState, useEffect } from "react";
import Roll from "./__components/Roll";
import { Input, Button, Div } from "@vkontakte/vkui";
import useAction from "engine/hooks/useAction";

const Casino = ({ options, prize }: { options: object[]; prize: string }) => {
  const [count, setCount] = useState<any>([]);
  const [disable, setDisable] = useState<boolean>(false);
  const [transition, setTransition] = useState<number>(0);
  const [translate, setTranslate] = useState<string>("translateX(0)");
  const action = useAction();

  useEffect(() => {
    role();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const role = () => {
    const arr = [];
    const [lose, draw, win] = ["#0D324D", "#185DC5", "#0276FF"];

    let i = 0;
    while (i <= 18) {
      const obj: any = options[action.getRandomNumber(1, options.length) - 1];
      const color = obj?.name === "x0" ? lose : obj?.name === "x1" ? draw : win;

      if (i === 17) {
        const prizeColor = prize === "x0" ? lose : prize === "x1" ? draw : win;
        arr.push(
          <div key={arr.length++} style={{ background: prizeColor }}>
            {prize}
          </div>
        );
      }

      arr.push(
        <div key={arr.length++} style={{ background: color }}>
          {obj?.name}
        </div>
      );
      i++;
    }

    setCount(arr);
    return arr;
  };

  const speen = () => {
    if (disable === true) return;
    setDisable(!disable);

    // timeout fetch
    setTimeout(() => {
      const rand: number = action.getRandomNumber(0, 2),
        randFlat: number = action.getRandomNumber(1, 9);

      // roll
      setTransition(3);
      setTranslate(`translateX(calc((-70px - ${rand}.${randFlat}px) * 18))`);

      //setPrize

      // back roll
      setTimeout(() => {
        setTransition(2);
        setTranslate("translateX(0)");
      }, 5000);

      // updates
      setTimeout(() => role(), 6200);
      setTimeout(() => setDisable(false), 7100);
    }, 1000);
  };

  return (
    <div className="Casino">
      <Roll transition={transition} translate={translate}>
        {count}
      </Roll>
      <Div className="Casino__inner">
        <Input
          className="Casino__input"
          disabled={disable}
          type="number"
          placeholder="Укажите ставку"
        />
        <Button
          className="Casino__button"
          disabled={disable}
          onClick={() => speen()}
        >
          Играть
        </Button>
      </Div>
    </div>
  );
};

export default Casino;
