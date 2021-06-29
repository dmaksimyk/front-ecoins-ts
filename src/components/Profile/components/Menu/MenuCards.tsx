import { ReactNode } from "react";

import {
  Button,
  Text
} from '@vkontakte/vkui'

type TProps = {
  img: ReactNode;
  text: string;
  event: Function;
}

const MenuCards = ({ img, text, event }: TProps) => {
  return (
    <Button
      className="MenuСards-container__card"
      mode="tertiary" 
      onClick={() => event()}
    >
      <div className="MenuСards-container__card-img">{img}</div>
      <Text
        className="MenuСards-container__card-text dell-select"
        weight="regular"
      >{text}</Text>
    </Button>
  )
}

export default MenuCards;