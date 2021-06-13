import { Story } from "engine/types";

import useNextPage from "./actions/useNextPage";
import useBackPage from "./actions/useBackPage";

const useAction = () => {
  const nextPage = useNextPage();
  const backPage = useBackPage();

  const action = {
    nextPage: async (options: Story) => nextPage(options),
    backPage: async (miss: boolean = false) => backPage(miss),
  }

  return action;
}

export default useAction;