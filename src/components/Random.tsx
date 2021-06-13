import { useState, useEffect } from 'react';

import Roll from './Roll';

import {
  Input,
  Button,
  Div,
} from '@gmelum/vkui';

type Props = {
  options: object[];
  prize: string;
}

const Random = ({ options, prize }: Props) => {
  const [count, setCount] = useState<any>([])
  const [disable, setDisable] = useState<boolean>(false)
  const [transition, setTransition] = useState<number>(0)
  const [translate, setTranslate] = useState<string>("translateX(0)")

  useEffect(() => {
    role();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selfRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const role = () => {
    const arr = [];
    const [lose, draw, win] = ["#0D324D", "#185DC5", "#0276FF"]

    let i = 0;
    while (i <= 18) {
      const obj: any = options[selfRandom(1, options.length) - 1];
      const color = (obj?.name === "x0") ? lose : (obj?.name === "x1") ? draw : win;

      if (i === 17) {
        const prizeColor = (prize === "x0") ? lose : (prize === "x1") ? draw : win;
        arr.push(<div key={arr.length++} style={{ background: prizeColor }}>{prize}</div>)
      }

      arr.push(<div key={arr.length++} style={{ background: color }}>{obj?.name}</div>)
      i++
    }

    setCount(arr);
    return arr;
  }

  const speen = () => {
    if (disable === true) return;
    setDisable(!disable);

    // timeout fetch
    setTimeout(() => {
      const rand: number = selfRandom(0, 2),
        randFlat: number = selfRandom(1, 9);

      // roll
      setTransition(3);
      setTranslate(`translateX(calc((-70px - ${rand}.${randFlat}px) * 18))`);

      //setPrize

      // back roll
      setTimeout(() => {
        setTransition(2);
        setTranslate("translateX(0)");
      }, 5000)

      // updates 
      setTimeout(() => role(), 6200);
      setTimeout(() => setDisable(false), 7100);
    }, 1000)
  }

  return (
    <div className="Random">
      <Roll
        transition={transition}
        translate={translate}
      >
        {count}
      </Roll>
      <Div className="Random-btns" style={{ flexDirection: "column" }}>
        <Input disabled={disable} type="number" placeholder="Укажите ставку" style={{ width: 300 }} />
        <Button style={{ marginTop: 12, height: 40, width: '100%' }} disabled={disable} onClick={() => speen()}>Играть</Button>
      </Div>
    </div>
  )
}

export default Random