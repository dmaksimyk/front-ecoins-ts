import { ReactNode } from "react";
import { useNavigation } from "engine";

import {
  Button,
  Text
} from '@vkontakte/vkui'

type TProps = {
  img: ReactNode;
  text: string;
  nextPage: 'Rating' | 'Transfer' | 'Inventory';
}

const MenuCards = ({ img, text, nextPage }: TProps) => {
  const history = useNavigation();

  return (
    <Button
      className="MenuСards-container__card"
      mode="tertiary" 
      onClick={() => history.nextPage({ activePanel: nextPage })}
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