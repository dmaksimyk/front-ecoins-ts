import { ACTIVE_MODAL } from "engine/state";
import { useSetRecoilState } from "recoil";
import { TModals } from "engine/types";

const useSetModal = () => {
  const setModal = useSetRecoilState(ACTIVE_MODAL);

  const useSetModals = async (modal: TModals) => {
    setModal(modal)
  }

  return useSetModals;
}

export default useSetModal;