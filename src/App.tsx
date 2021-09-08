import { useEffect } from "react";
import { useClient, useNavigation } from "engine";
import { useRecoilValue, useSetRecoilState } from "recoil";
import "./style/style.scss";
import { ACTIVE_VIEW, PLATFORM } from "engine/state";
import { Epic } from "@vkontakte/vkui";
import { StyledTabbar } from "components/UI";
import { VEarnings, VEntertainment, VHome, VShop } from "views";

const App: React.FC = () => {
  const platform = document.body.getAttribute("platform");
  const setPlatform = useSetRecoilState(PLATFORM);

  useClient();
  const history = useNavigation();
  const activeView = useRecoilValue(ACTIVE_VIEW);

  useEffect(() => {
    window.addEventListener("popstate", () => history.backPage());
    window.history.pushState(undefined, "");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (platform) {
      setPlatform(platform);
      console.log("setPlatform:", platform);
    }
  }, [platform, setPlatform]);

  return (
    <Epic activeStory={activeView} tabbar={<StyledTabbar />}>
      <VHome id="Home" />
      <VEarnings id="Earnings" />
      <VEntertainment id="Entertainment" />
      <VShop id="Shop" />
    </Epic>
  );
};

export default App;
