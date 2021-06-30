import useSetModal from "./actions/useSetModal";

const useAction = () => {
  const setModal = useSetModal();

  const action = {
    setModal: async (modal: any) => setModal(modal),
  }

  return action;
}

export default useAction;