import { Shop } from "panels";

import { View } from "@vkontakte/vkui";
import Modals from "components/Modals";
import { useRecoilValue } from "recoil";
import { ACTIVE_PANEL, ACTIVE_POPOUT } from "engine/state";

const VShop: React.FC<{id: string}> = ({ id }) => {
  const activePanel = useRecoilValue(ACTIVE_PANEL);
  const popout = useRecoilValue(ACTIVE_POPOUT);

  return (
    <View id={id} activePanel={activePanel} popout={popout} modal={<Modals />}>
      <Shop id="Main" />
    </View>
  );
};

export default VShop;
