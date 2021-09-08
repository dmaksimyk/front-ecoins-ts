import { Earnings } from "panels";

import { View } from "@vkontakte/vkui";
import Modals from "components/Modals";
import { useRecoilValue } from "recoil";
import { ACTIVE_PANEL, ACTIVE_POPOUT } from "engine/state";

const VEarnings: React.FC<{id: string}> = ({ id }) => {
  const activePanel = useRecoilValue(ACTIVE_PANEL);
  const popout = useRecoilValue(ACTIVE_POPOUT);

  return (
    <View id={id} activePanel={activePanel} popout={popout} modal={<Modals />}>
      <Earnings id="Main" />
    </View>
  );
};

export default VEarnings;
