import { Story, TModals } from "engine/types";

import useNextPage from "./actions/useNextPage";
import useBackPage from "./actions/useBackPage";
import useSetModal from "./actions/useSetModal";

const useAction = () => {
  const nextPage = useNextPage();
  const backPage = useBackPage();
  const setModal = useSetModal();

  const action = {
    nextPage: async (options: Story) => nextPage(options),
    backPage: async (miss: boolean = false) => backPage(miss),
    setModal: async (modal: TModals) => setModal(modal),
  }

  return action;
}

export default useAction;