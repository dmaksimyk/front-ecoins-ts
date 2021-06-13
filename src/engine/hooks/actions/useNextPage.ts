import { useCall } from "engine";
import * as store from "engine/state";
import { useSetRecoilState } from "recoil";
import { Story } from "engine/types";

const useNextPage = () => {
  const [story, setStory] = useCall(store.APP_STORY);
  const setViewPanel = useSetRecoilState(store.ACTIVE_VIEW_PANEL);

  const nextPage = async (options: Story) => {
    let history = await story();
    let endHistory = history[history.length - 1];
    let key = Object.keys(endHistory).reverse();

    for (let item of key) {
      if (options[item] === history[history.length - 1][item]) return
   
      if (!options[item]) options[item] = "";
      else break ;
    }

    let newStory = ({ ...endHistory, ...options } as Story)

    setStory([...history, ...[newStory]]);
    
    (newStory.activeView && newStory) && setViewPanel({
      activeView: options.activeView || 'Home', 
      activePanel: options.activePanel || 'Home'
    })
    window.history.pushState(newStory.activeView, JSON.stringify(newStory));
  }

  return nextPage;
}

export default useNextPage;