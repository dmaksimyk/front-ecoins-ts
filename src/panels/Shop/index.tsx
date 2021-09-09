import React from 'react';
import { useRecoilValue } from 'recoil';
import { Panel, PanelProps, Separator } from '@vkontakte/vkui';
import { StyledPanelHeader, CardMyBalance } from 'components/UI';
import { Filter, Slider } from 'components/Shop';
import { SHOP } from 'engine/state';

const Shop: React.FC<PanelProps> = ({ id }) => {
  const shop = useRecoilValue(SHOP);

  return (
    <Panel id={id} className="Shop">
      <StyledPanelHeader caption="Магазин" status="Крутые шмотки только тут" />
      <CardMyBalance />
      {shop.length > 1
        ? [<Filter key="Shop_filter" />, <Separator key="Shop_separator" />]
        : null}
      <Slider />
    </Panel>
  );
};

export default Shop;
