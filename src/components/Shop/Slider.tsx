/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Loader } from 'components/Loaders';
import { Icon56MarketOutline } from '@vkontakte/icons';
import { Gallery } from '@vkontakte/vkui';
import { CLIENT, SHOP, SUBNAVIGATION_BAR_SELECT } from 'engine/state';
import {
  Businesses,
  Promotions,
  Home,
  Cars,
  Clothes,
  Smartphones,
  Market,
} from 'panels/Shop/Items';

const Slider: React.FC = () => {
  const client = useRecoilValue(CLIENT);
  const [shop, setShop] = useRecoilState(SHOP);
  const panel = useRecoilValue(SUBNAVIGATION_BAR_SELECT);

  useEffect(() => {
    client.emit('GET_ITEMS');
    console.log('shop:', 'loading');

    return () => {
      setShop([]);
      console.log('shop:', 'clear');
    };
  }, [client, setShop]);

  if (shop.length > 1) {
    return (
      <Gallery
        slideWidth="100%"
        style={{ marginLeft: 0, height: 'auto', cursor: 'default' }}
        align="left"
        slideIndex={panel.index}
      >
        <Businesses
          arr={shop}
          style={panel.index === 0 ? { height: 'auto' } : { height: 0 }}
        />
        <Promotions
          style={panel.index === 1 ? { height: 'auto' } : { height: 0 }}
        />
        <Home style={panel.index === 2 ? { height: 'auto' } : { height: 0 }} />
        <Cars style={panel.index === 3 ? { height: 'auto' } : { height: 0 }} />
        <Clothes
          style={panel.index === 4 ? { height: 'auto' } : { height: 0 }}
        />
        <Smartphones
          style={panel.index === 5 ? { height: 'auto' } : { height: 0 }}
        />
        <Market
          style={panel.index === 6 ? { height: 'auto' } : { height: 0 }}
        />
      </Gallery>
    );
  }
  return <Loader icon={<Icon56MarketOutline />} />;
};

export default Slider;
