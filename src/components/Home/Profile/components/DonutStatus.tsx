import { useRecoilValue } from "recoil";
import { Icon12Fire } from "@vkontakte/icons";

import { 
  DONUT, 
} from "engine/state";

const DonutStatus = () => {
  const donut = useRecoilValue(DONUT);

  if (donut) {
    return (
      <div className="donut-status__container">
        <Icon12Fire />
      </div >
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default DonutStatus;