import { ACTIVE_MODAL } from "engine/state";
import { useSetRecoilState } from "recoil";

const useSetModal = () => {
  const setModal = useSetRecoilState(ACTIVE_MODAL);

  const useSetModals = async (modal: any) => {
    setModal(modal)
  }

  return useSetModals;
}

export default useSetModal;