// import { useSetRecoilState } from "recoil";
// import bridge from "@vkontakte/vk-bridge";
// import { useCall } from "engine";
// import * as store from "engine/state";
// import { Story } from "engine/types";

const useBackPage = () => {
  // const [story, setStory] = useCall(store.APP_STORY);
  // const setView = useSetRecoilState(store.ACTIVE_VIEW);
  // const setPanel = useSetRecoilState(store.ACTIVE_PANEL);

  // const [popout, setPopout] = useCall(store.POPOUT);
  // const [activePanel] = useCall(store.ACTIVE_PANEL);

  const backPage = async (miss?: boolean) => {
  //   let statePopout = await popout();
  //   let statePanel = await activePanel();

  //   window.history.pushState(statePanel, statePanel);

  //   if (statePopout && !miss) setPopout(undefined)
  //   else {
  //     let history = await story();
  //     if (history?.length) {
  //       if (history.length === 1) {
  //         bridge.send("VKWebAppClose", { "status": "success" })
  //       }
  //       else if (history.length >= 1) {
  //         let newStory = (history[history.length - 2] as Story);
  //         setStory(history.slice(0, -1));
  //         newStory.activeView && setView(newStory.activeView);
  //         newStory.activePanel && setPanel(newStory.activePanel);
  //       }
  //     }
  //   }
  }

  return backPage;
}

export default useBackPage;