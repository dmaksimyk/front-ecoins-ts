/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { Input, Button, Div } from '@vkontakte/vkui';
import useAction from 'engine/hooks/useAction';
import Roll from './components/Roll';

const Casino: React.FC<{
  // eslint-disable-next-line @typescript-eslint/ban-types
  options: object[];
  prize: string;
}> = ({ options, prize }) => {
  const [count, setCount] = useState<any>([]);
  const [disable, setDisable] = useState<boolean>(false);
  const [transition, setTransition] = useState<number>(0);
  const [translate, setTranslate] = useState<string>('translateX(0)');
  const action = useAction();
  const role = () => {
    const arr = [];
    const [lose, draw, win] = ['#0D324D', '#185DC5', '#0276FF'];

    let i = 0;
    while (i <= 18) {
      const obj: any = options[action.getRandomNumber(1, options.length) - 1];
      // eslint-disable-next-line no-nested-ternary
      const color = obj?.name === 'x0'
        ? lose
        : obj?.name === 'x1'
          ? draw
          : win;

      if (i === 17) {
        // eslint-disable-next-line no-nested-ternary
        const prizeColor = prize === 'x0'
          ? lose
          : prize === 'x1'
            ? draw
            : win;

        arr.push(
          <div key={arr.length++} style={{ background: prizeColor }}>
            {prize}
          </div>,
        );
      }

      arr.push(
        <div key={arr.length++} style={{ background: color }}>
          {obj?.name}
        </div>,
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
      const rand: number = action.getRandomNumber(0, 2);
      const randFlat: number = action.getRandomNumber(1, 9);

      // roll
      setTransition(3);
      setTranslate(`translateX(calc((-70px - ${rand}.${randFlat}px) * 18))`);

      // back roll
      setTimeout(() => {
        setTransition(2);
        setTranslate('translateX(0)');
      }, 5000);

      // updates
      setTimeout(() => role(), 6200);
      setTimeout(() => setDisable(false), 7100);
    }, 1000);
  };

  useEffect(() => {
    role();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
