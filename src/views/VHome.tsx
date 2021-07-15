import { Home, Rating, Inventory, Transfer, Settings } from "panels";

import { View } from "@vkontakte/vkui";
import { Modals } from "components";
import { useRecoilValue } from "recoil";
import { ACTIVE_PANEL, ACTIVE_POPOUT } from "engine/state";

const VHome = ({ id }: { id: string }) => {
  const activePanel = useRecoilValue(ACTIVE_PANEL);
  const popout = useRecoilValue(ACTIVE_POPOUT);

  return (
    <View id={id} activePanel={activePanel} popout={popout} modal={<Modals />}>
      <Home id="Main" />
      <Rating id="Rating" />
      <Transfer id="Transfer" />
      <Inventory id="Inventory" />
      <Settings id="Settings" />
    </View>
  );
};

export default VHome;
