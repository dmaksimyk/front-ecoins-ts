import { ModalRoot } from "@vkontakte/vkui";
import { useNavigation } from "engine";
import { ACTIVE_MODAL } from "engine/state";
import { useRecoilValue } from "recoil";
import { InformationUser } from "./components";

import {
  ModalPage
} from "./Modals";

const Modals = () => {
  const activeModal = useRecoilValue(ACTIVE_MODAL)
  const history = useNavigation()

  return (
    <ModalRoot 
      activeModal={activeModal}
      onClose={() => history.backPage()}
    >
      <ModalPage 
        id="seeUserMore"
        header="Подробная информация"
      ><InformationUser/></ModalPage>
    </ModalRoot>
  )
}

export default Modals;