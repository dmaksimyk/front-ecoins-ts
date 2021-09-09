import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigation } from 'engine';
import { ACTIVE_VIEW } from 'engine/state';
import { TabbarItem } from '@vkontakte/vkui';

const StyledTabbarItem: React.FC<{
  text: string;
  page: string;
  icon: ReactNode;
}> = ({ text, page, icon }) => {
  const history = useNavigation();
  const activeView = useRecoilValue(ACTIVE_VIEW);

  return (
    <TabbarItem
      onClick={() => history.nextPage({ activeView: page })}
      selected={activeView === page}
      data-story={page}
      text={text}
    >
      {icon}
    </TabbarItem>
  );
};

export default StyledTabbarItem;
