import { ReactNode } from "react"
import { useRecoilValue } from "recoil"
import { useNavigation } from 'engine';
import { ACTIVE_VIEW } from "engine/state"
import { TabbarItem } from "@vkontakte/vkui"

type TProps = {
  text: string;
  page: string;
  icon: ReactNode;
}

const StyledTabbarItem = ({ text, page, icon }: TProps) => {
  const history = useNavigation();
  const activeView = useRecoilValue(ACTIVE_VIEW)

  return (
    <TabbarItem
      onClick={() => history.nextPage({ activeView: page })}
      selected={activeView === page}
      data-story={page}
      text={text}
    >
      {icon}
    </TabbarItem>
  )
}

export default StyledTabbarItem;