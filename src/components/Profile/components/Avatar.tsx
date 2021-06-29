import { useRecoilValue } from "recoil";

import {
  Avatar,
  Div
} from '@vkontakte/vkui'

import { 
  IMG 
} from "engine/state";
import DonutStatus from "./DonutStatus";

const MyAvatar = () => {
  const img = useRecoilValue(IMG);

  return (
    <Div className="user-container__avatar">
      <DonutStatus />
      <Avatar 
        className="user-avatar__img" 
        src={img} 
        alt='' 
        size={56} 
      />
    </Div>
  )
}

export default MyAvatar;