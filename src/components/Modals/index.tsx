import { ModalRoot } from "@vkontakte/vkui";
import { useAction } from "engine";
import { ACTIVE_MODAL } from "engine/state";
import { useRecoilValue } from "recoil";
import { InformationUser } from "./components";

import {
  ModalPage
} from "./Modals";

const Modals = () => {
  const activeModal = useRecoilValue(ACTIVE_MODAL)
  const action = useAction()

  return (
    <ModalRoot 
      activeModal={activeModal}
      onClose={() => action.setModal(null)}
    >
      <ModalPage 
        id="seeUserMore"
        header="Подробная информация"
      ><InformationUser/></ModalPage>
    </ModalRoot>
  )
}

export default Modals;