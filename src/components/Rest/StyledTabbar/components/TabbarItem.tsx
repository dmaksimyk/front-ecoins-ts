import { ReactNode } from "react"
import { useRecoilValue } from "recoil"
import { useAction } from 'engine';
import { ACTIVE_VIEW_PANEL } from "engine/state"
import { TabbarItem } from "@vkontakte/vkui"

type TProps = {
  text: string;
  page: string;
  icon: ReactNode;
}

const StyledTabbarItem = ({ text, page, icon }: TProps) => {
  const action = useAction();
  const activeViewPanel = useRecoilValue(ACTIVE_VIEW_PANEL)

  return (
    <TabbarItem
      onClick={() => action.nextPage({
        activeView: page,
        activePanel: page
      })}
      selected={activeViewPanel.activeView === page}
      data-story={page}
      text={text}
    >
      {icon}
    </TabbarItem>
  )
}

export default StyledTabbarItem;