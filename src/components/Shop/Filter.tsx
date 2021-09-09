import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { SUBNAVIGATION_BAR_SELECT } from 'engine/state';
import { CardScroll, SubnavigationButton } from '@vkontakte/vkui';
import {
  Icon28MarketOutline,
  Icon28WorkOutline,
  Icon28SmartphoneOutline,
  Icon28TicketOutline,
  Icon28TshirtOutline,
  Icon28CarOutline,
  Icon28HomeOutline,
} from '@vkontakte/icons';

const Filter: React.FC = () => {
  const [selected, setSelected] = useRecoilState(SUBNAVIGATION_BAR_SELECT);

  const btnsStyle = {
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 12,
  };

  useEffect(() => () => setSelected({
    selected: 'businesses',
    index: 0,
  }), [setSelected]);

  return (
    <CardScroll size="s">
      <SubnavigationButton
        style={{ marginLeft: 0, marginTop: 12, marginBottom: 12 }}
        selected={selected.selected === 'businesses'}
        onClick={() => setSelected({ selected: 'businesses', index: 0 })}
        before={<Icon28WorkOutline />}
        size="l"
      >
        Бизнесы
      </SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected.selected === 'promotions'}
        onClick={() => setSelected({ selected: 'promotions', index: 1 })}
        before={<Icon28TicketOutline />}
        size="l"
      >
        Акции
      </SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected.selected === 'home'}
        onClick={() => setSelected({ selected: 'home', index: 2 })}
        before={<Icon28HomeOutline />}
        size="l"
      >
        Дома и квартиры
      </SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected.selected === 'cars'}
        onClick={() => setSelected({ selected: 'cars', index: 3 })}
        before={<Icon28CarOutline />}
        size="l"
      >
        Машины
      </SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected.selected === 'clothes'}
        onClick={() => setSelected({ selected: 'clothes', index: 4 })}
        before={<Icon28TshirtOutline />}
        size="l"
      >
        Одежда
      </SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected.selected === 'smartphones'}
        onClick={() => setSelected({ selected: 'smartphones', index: 5 })}
        before={<Icon28SmartphoneOutline />}
        size="l"
      >
        Смартфоны
      </SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected.selected === 'market'}
        onClick={() => setSelected({ selected: 'market', index: 6 })}
        before={<Icon28MarketOutline />}
        size="l"
      >
        Рынок
      </SubnavigationButton>
    </CardScroll>
  );
};

export default Filter;
